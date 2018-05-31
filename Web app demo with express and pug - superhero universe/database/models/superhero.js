'use strict';
module.exports = (sequelize, DataTypes) => {
  const Superhero = sequelize.define('Superhero', {
    name: {
      type: DataTypes.STRING,
    },
    secretIdentity: {
      type: DataTypes.STRING,
    },
  }, {});
  Superhero.associate = (models) => {
    const {
      Power,
      Alignment,
    } = models;

    Superhero.belongsToMany(Power, {
      through: 'SuperheroesPowers',
    });

    Superhero.belongsTo(Alignment, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });

    Power.belongsToMany(Superhero, {
      through: 'SuperheroesPowers',
    });
  };
  return Superhero;
};
