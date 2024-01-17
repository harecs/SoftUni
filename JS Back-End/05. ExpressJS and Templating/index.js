const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const switches = require('./data/switches');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/switches', (req, res) => {
    res.render('switches', { switches });
});

app.get('/switches/add', (req, res) => {
    res.redirect('/');
})

app.get('/switches/:id', (req, res) => {
    res.render('switchInfo', switches[req.params.id])
})



app.listen(5001, () => console.log('Server is running on port 5001...'));