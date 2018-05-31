const {
    Alignment,
    Superhero,
    Power,
} = require('../database/models');

const {
    SuperheroesData,
} = require('./Superheroes');

const {
    Data,
} = require('./generic.data');

module.exports = {
    alignments: new Data(Alignment),
    superheroes: new SuperheroesData(Superhero),
    powers: new Data(Power),
};
