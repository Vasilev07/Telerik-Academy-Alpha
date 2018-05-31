// build-in packages
const path = require('path');

// npm packages
const express = require('express');
const bodyParser = require('body-parser');

// local modules
const data = require('./data.js');

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const superheroes = data.getAll();
    const model = {
        superheroes,
    };

    res.render('home', model);
});

app.get('/superheroes/create', (req, res) => {
    res.render('create');
});

app.get('/superheroes/:id', (req, res) => {
    const id = req.params.id;
    const superhero = data.getById(+id);
    const model = {
        superhero,
    };

    res.render('heroId', model);
});


app.post('/superheroes/create', (req, res) => {
    const superhero = req.body;
    data.createHero(superhero);
    res.redirect('/');
});

app.listen(3001);
