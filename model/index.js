'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const FoodModel = require('./food.js');
const ClothesModel = require('./clothes.js');

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

// sqliteDatbase = sqlite:memory
// postgresDatabase = 'postgresql://localhost:5432/lab03';

const options =
  process.env.NODE_ENV === 'production'
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

const sequelizeInstance = new Sequelize(DATABASE_URL, options);
const foodTable = FoodModel(sequelizeInstance, DataTypes);
const clothesTable = ClothesModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  food: foodTable,
  clothes: clothesTable,
};
