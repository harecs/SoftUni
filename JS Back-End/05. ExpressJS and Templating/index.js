const express = require('express');
const hbs = require('express-handlebars');

const app = express();
app.use(express.static('public'));

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        description: 'Hello from Hari the dev'
    });
});

app.get('/switches', (req, res) => {
    res.render('switches', {});
});



app.listen(5001, () => console.log('Server is running on port 5001...'));