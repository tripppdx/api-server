'use strict';

const { db, food } = require('../model');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing our sequelize model', () => {
  it('Should be able to create a Food', async () => {
    let newFood = await food.create({
      name: 'banana',
      calories: 200,
    });

    console.log(newFood);
    expect(newFood.id).toBe(1);
    expect(newFood.name).toBe('banana');
  });
});
