const http = require('http');
const siteCss = require('./styles/site.css');
const homeHtml = require('./views/index.html');
const addBreedHtml = require('./views/addBreed.html');
const addCatHtml = require('./views/addCat.html');
const editCatHtml = require('./views/editCat.html');
const catShelterHtml = require('./views/catShelter.html');

const breeds = require('./data/breeds');
const cats = require('./data/cats');

const port = 5001;

const server = http.createServer((req, res) => {
    const url = new URL(req.headers.host + req.url);
    
    console.log('New request to ', req.url);
    console.log('-- HTTP Method ', req.method);
    console.log(url.searchParams);

    if (url.pathname.includes('site.css')) {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        res.write(siteCss);
    } else if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.write(homeHtml(cats));
    } else if (url.pathname == `${port}/cats/add-breed`) {
        if (url.search) {
            breeds.push(url.searchParams.get('breed'));

            res.writeHead(301, {
                'Location': '/'
            });

            res.write(homeHtml(cats));
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(addBreedHtml);
        }
    } else if (url.pathname == `${port}/cats/add-cat`) {
        if (url.search) {
            const cat = {
                id: cats[0] ? cats[cats.length - 1].id + 1 : 0,
                name: url.searchParams.get('name'),
                description: url.searchParams.get('description'),
                image: url.searchParams.get('upload'),
                breed: url.searchParams.get('breed')
            }

            cats.push(cat);

            res.writeHead(301, {
                'Location': '/'
            });

            res.write(homeHtml(cats));
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(addCatHtml(breeds));
        }
    } else if (url.pathname.includes('/cats/edit-cat')) {
        const paths = url.pathname.split('/');
        const catId = Number(paths[paths.length - 1].split('?')[0]);
        const catArrayIndex = cats.findIndex(cat => cat.id == catId);

        if (url.search) {
            cats[catArrayIndex] = {
                id: catId,
                name: url.searchParams.get('name'),
                description: url.searchParams.get('description'),
                image: url.searchParams.get('upload'),
                breed: url.searchParams.get('breed')
            }

            res.writeHead(301, {
                'Location': '/'
            });

            res.write(homeHtml(cats));
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(editCatHtml(cats[catArrayIndex], breeds));
        }
    } else if (url.pathname.includes('/cats/view-cat')) {
        const paths = url.pathname.split('/');
        const catId = Number(paths[paths.length - 1]);
        const catArrayIndex = cats.findIndex(cat => cat.id == catId);

        if (req.method == 'POST') {
            cats.splice(catArrayIndex, 1);

            console.log(cats);

            res.writeHead(301, {
                'Location': '/'
            });

            res.write(homeHtml(cats));
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(catShelterHtml(cats[catArrayIndex]));
        }
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });

        res.write('<h1>404 Not Found</h1>');
    }

    res.end();
});

server.listen(port);
console.log(`Server is listening on port ${port}...`);