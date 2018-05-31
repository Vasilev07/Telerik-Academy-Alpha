const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const {
    superheroes,
    alignments,
    powers,
} = require('./data/data');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({
    extende: true,
}));

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.redirect('/superheroes');
});

app.get('/superheroes', async (req, res) => {
    const heroes = await superheroes.getAll();
    const model = {
        heroes,
    };
    res.render('main', model);
});

app.get('/superheroes/create', async (req, res) => {
    const alignmentsInfo = await alignments.getAll();
    const powersInfo = await powers.getAll();
    const model = {
        alignmentsInfo,
        powersInfo,
    };
    res.render('create', model);
});

app.get('/superheroes/:id', async (req, res) => {
    const {
        id,
    } = req.params;
    const superhero = await superheroes.getHeroDetails(+id);
    const model = {
        superhero,
    };
    res.render('heroId', model);
});

app.post('/', async (req, res) => {
    const superheroModel = req.body;
    console.log(req.body);
    const powersIds = Array.isArray(superheroModel.powerIdOrName) ?
        superheroModel.powerIdOrName : [superheroModel.powerIdOrName];

    const currentPowers = await Promise.all(
        powersIds.map((id) => {
            return powers.getById(+id);
        }));

    superheroModel.AlignmentId = +superheroModel.AlignmentId;

    const superhero = await superheroes.create(superheroModel);
    await superhero.setPowers(currentPowers);
    res.redirect('/superheroes');
});

app.listen(3001);
