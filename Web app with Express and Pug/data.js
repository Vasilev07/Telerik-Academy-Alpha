const superheroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
];

let uniqueId = 2;

const getAll = () => {
    return superheroes;
};

const getById = (id) => {
    return superheroes.find((hero) => hero.id === id);
};

const createHero = (hero) => {
    hero.id = (uniqueId += 1);
    superheroes.push(hero);
};

module.exports = {
    getAll,
    getById,
    createHero,
};
