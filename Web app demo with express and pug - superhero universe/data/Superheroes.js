const {
    Data,
} = require('./generic.data');

const {
    Alignment,
    Superhero,
    Power,
} = require('../database/models');

class SuperheroesData extends Data {
    constructor() {
        super(Superhero, [Power]);
    }

    async getHeroDetails(id) {
        let hero = await this.getById(id);
        hero = hero.dataValues;
        delete hero.createdAt;
        delete hero.updatedAt;
        const alignmentId = await Alignment.find({
            where: {
                id: hero.AlignmentId,
            },
        });
        hero.AlignmentId = alignmentId.name;
        console.log(hero);
        return hero;
    }
    _isObjectValid(obj) {
        return !!obj;
    }
}

module.exports = {
    SuperheroesData,
};
