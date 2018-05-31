'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alignment = sequelize.define('Alignment', {
    name: {
      type: DataTypes.STRING,
    },
  }, {});
  Alignment.associate = (models) => {
    // associations can be defined here
  };
  return Alignment;
};
