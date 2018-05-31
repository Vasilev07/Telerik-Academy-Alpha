'use strict';
module.exports = (sequelize, DataTypes) => {
  const superheroes = sequelize.define('superheroes', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    secretIdentity: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    story: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {});

  superheroes.belongsTo(Alignment, {
    foreignKey: {
      allowNull: false,
    },
    onDelete: 'CASCADE',
  });

  superheroes.belongsToMany(Power, {
    through: SuperheroesPowers,
  });

  power.belongsToMany(Superhero, {
    through: SuperheroesPowers,
  });
};
return superheroes;
};