'use strict';
module.exports = (sequelize, DataTypes) => {
  const superheropowers = sequelize.define('superheropowers', {
    superherosId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    powerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {});
  superheropowers.associate = (models) => {
    // associations can be defined here
  };
  return superheropowers;
};