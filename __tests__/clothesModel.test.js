'use strict';

const { db, clothes } = require('../model');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing our sequelize model', () => {
  it('Should be able to create a Clothes', async () => {
    let newClothes = await clothes.create({
      name: 'jeans',
      fabric: 'denim',
    });

    console.log(newClothes);
    expect(newClothes.id).toBe(1);
    expect(newClothes.name).toBe('jeans');
  });
});
