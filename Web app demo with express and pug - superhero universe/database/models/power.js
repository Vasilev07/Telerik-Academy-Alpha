'use strict';
module.exports = (sequelize, DataTypes) => {
  const Power = sequelize.define('Power', {
    name: {
      type: DataTypes.STRING,
    },
  }, {});
  Power.associate = (models) => {
    // associations can be defined here
  };
  return Power;
};
