'use strict';
module.exports = (sequelize, DataTypes) => {
  const alignment = sequelize.define('alignment', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  }, {});
  alignment.associate = function (models) {
    // associations can be defined here
  };
  return alignment;
};  