'use strict';
module.exports = (sequelize, DataTypes) => {
  const powers = sequelize.define('powers', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    }
  }, {});
  powers.associate = (models) => {
    const {
      powerType,
    } = models;

    powers.belongsTo(powerType);
  };
  return powers;
};
