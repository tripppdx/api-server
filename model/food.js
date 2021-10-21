"use strict";

const Phrase = (sequelize, DataTypes) =>
  sequelize.define("Food", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
  });

module.exports = Food;
