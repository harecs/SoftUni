const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const port = 5001;

const siteCss = require('./styles/site.css.js');
const homeHtml = require('./views/index.html.js');
const addBreedHtml = require('./views/addBreed.html');
const addCatHtml = require('./views/addCat.html');
const editCatHtml = require('./views/editCat.html');
const catShelterHtml = require('./views/catShelter.html');

const breeds = require('./data/breeds');
const cats = require('./data/cats');

const server = http.createServer((req, res) => {
    console.log(`Request (${req.method}) ${req.url}`);

    if (req.method == 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
    } else if (req.method == 'POST') {
        res.statusCode = 301;
        res.setHeader('Location', '/');
    }

    if (req.url.includes('site.css')) {
        const body = [];

        const stream = fs.createReadStream('./styles/site.css', { encoding: 'utf-8' });
        stream.on('data', (chunk) => body.push(chunk));

        stream.on('end', () => {
            res.setHeader('Content-Type', 'text/css');
            res.write(body.join(''));
            res.end();
        });
    } else if (req.url == '/') {
        res.write(homeHtml(cats));
        res.end();
    } else if (req.url.includes('/search?search')) {
        const data = querystring.parse(req.url.split('?')[1]);
        const search = data.search;

        const searchedCats = cats.filter(cat => {
            return cat.name.includes(search) || cat.description.includes(search) || cat.breed.includes(search)
        });

        res.write(homeHtml(searchedCats));
    } else if (req.url == '/cats/add-breed' && req.method == 'GET') {
        res.write(addBreedHtml);
    } else if (req.url == '/cats/add-breed' && req.method == 'POST') {
        const body = [];

        req.on('data', (chunk) => body.push(chunk));
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString('utf-8');
            const data = querystring.parse(parsedBody);
            breeds.push(data.breed);
        });
    } else if (req.url == '/cats/add-cat' && req.method == 'GET') {
        res.write(addCatHtml(breeds))
    } else if (req.url == '/cats/add-cat' && req.method == 'POST') {
        const body = [];

        req.on('data', (chunk) => body.push(chunk));
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString('utf-8');
            const data = querystring.parse(parsedBody);
            data.id = cats[0] ? cats[cats.length - 1].id + 1 : 0;
            cats.push(data);
        });

        res.write(homeHtml(cats));
    } else if (req.url.includes('/cats/edit-cat/') && req.method == 'GET') {
        const catArrayIndex = getCurrentCatIndex(req.url);
        res.write(editCatHtml(cats[catArrayIndex], breeds))
    } else if (req.url.includes('/cats/edit-cat/') && req.method == 'POST') {
        const body = [];

        req.on('data', (chunk) => body.push(chunk));
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString('utf-8');
            const data = querystring.parse(parsedBody);
            const catId = getCurrentCatIndex(req.url);
            data.id = catId;

            cats[catId] = data;
            res.write(homeHtml(cats));
        });
    } else if (req.url.includes('/cats/view-cat/') && req.method == 'GET') {
        const catArrayIndex = getCurrentCatIndex(req.url);
        res.write(catShelterHtml(cats[catArrayIndex]));
    } else if (req.url.includes('/cats/view-cat/') && req.method == 'POST') {
        cats.splice(getCurrentCatIndex(req.url), 1);
        res.write(homeHtml(cats));
    } else {
        res.statusCode = 404;
        res.write('<h1>404 Not Found</h1>');
    }

    // res.end();
});

server.listen(port);
console.log(`Server is listening on port ${port}...`);

function getCurrentCatIndex(reqUrl) {
    const paths = reqUrl.split('/');
    const catId = Number(paths[paths.length - 1]);
    const catArrayIndex = cats.findIndex(cat => cat.id == catId);
    return catArrayIndex;
}

// function htmlReplacer(placeholders, data) {
    
// }