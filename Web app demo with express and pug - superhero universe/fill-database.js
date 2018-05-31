const {
    Alignment,
    Superhero,
    Power,
} = require('./database/models');

const fill = async () => {
    const power = await Power.findCreateFind({
        where: {
            name: 'Super Weak',
        },
    });

    const alignment = await Alignment.findCreateFind({
        where: {
            name: 'Nqma',
        },
    });

    const superhero = await Superhero.create({
            name: 'Petka',
            secretIdentity: 'Super Petka',
            AlignmentId: alignment[0].id,
    });
    superhero.setPowers([power[0].id]);
};
fill();
    