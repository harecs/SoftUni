const http = require('http');
const port = 5001;

const siteCss = require('./styles/site.css');
const homeHtml = require('./views/index.html');
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
        res.statusCode = 301
        res.setHeader('Location', '/');
    }

    const paths = req.url.split('/');
    const catId = Number(paths[paths.length - 1]);
    const catArrayIndex = cats.findIndex(cat => cat.id == catId);

    req.on('data', (chunk) => {
        const data = Object
            .fromEntries(new URL(`${req.headers.host}${req.url}/?${chunk.toString()}`)
                .searchParams
                .entries());

        const { name, description, upload, breed } = data;

        if (req.url == '/cats/add-breed') {
            breeds.push(breed);
        } else if (req.url == '/cats/add-cat') {
            const id = cats[0] ? cats[cats.length - 1].id + 1 : 0;
            cats.push({ id, name, description, image: upload, breed });
        } else if (req.url.includes('cats/edit-cat/')) {
            cats[catArrayIndex] = { id: catId, name, description, image: upload, breed };
        }
    });

    if (req.url.includes('site.css')) {
        res.setHeader('Content-Type', 'text/css');
        res.write(siteCss);
    } else if (req.url == '/') {
        res.write(homeHtml(cats));
    } else if (req.url.includes('/search?search')) {
        const url = new URL(`${req.headers.host}${req.url}`);
        const search = url.searchParams.get('search');

        const searchedCats = cats.filter(cat => {
            return cat.name.includes(search) || cat.description.includes(search) || cat.breed.includes(search)
        });

        res.write(homeHtml(searchedCats));
    } else if (req.url == '/cats/add-breed') {
        res.statusCode = 200;
        res.write(addBreedHtml);
    } else if (req.url == '/cats/add-cat') {
        req.method == 'GET' ? res.write(addCatHtml(breeds)) : res.write(homeHtml(cats));
    } else if (req.url.includes('/cats/edit-cat/')) {
        req.method == 'GET'
            ? res.write(editCatHtml(cats[catArrayIndex], breeds))
            : res.write(homeHtml(cats));
    } else if (req.url.includes('/cats/view-cat/')) {
        if (req.method == 'POST') {
            cats.splice(catArrayIndex, 1);
            res.write(homeHtml(cats));
        } else {
            res.write(catShelterHtml(cats[catArrayIndex]));
        }
    } else {
        res.statusCode = 404;
        res.write('<h1>404 Not Found</h1>');
    }

    res.end();
});

server.listen(port);
console.log(`Server is listening on port ${port}...`);