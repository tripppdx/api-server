'use strict';

const express = require('express');
const { food } = require('../model');

const router = express.Router();

router.get('/', getAllFood);
router.get('/:id', getOneFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

// start writing our route handlers!
// what's the first we want this function to do?
async function getOneFood(request, response) {
  // perfrom our CRUD

  const id = request.params.id;
  // how do we get our Food from the DB
  const foundFood = await food.findByPk(parseInt(id));
  response.status(200);
  response.send(foundFood);
}

async function getAllFood(request, response, next) {
  try {
    const foundAllFood = await food.findAll(); //returns all rows
    response.status(200);
    response.send(foundAllFood);
  } catch (e) {
    // response.status(500);
    // response.send(e);
    next(e);
  }
}

async function createFood(request, response, next) {
  try {
    const newFood = await food.create({
      name: request.body.name,
      size: request.body.size,
    });

    response.status(201); // Creation successful
    response.send(newFood);
  } catch (e) {
    next(e);
  }
}

async function updateFood(request, response, next) {
  try {
    // does this actually update?
    const id = parseInt(request.params.id);

    const foundFood = await food.findByPk(id);
    const updatedFood = await foundFood.update(request.body);

    response.status(200);
    response.send(updatedFood);
  } catch (e) {
    next(e);
  }
}

async function deleteFood(req, res, next) {
  try {
    // this will return an instance of the clothing model (which has its owne methods)
    // const foundFood = await food.findById();
    const id = parseInt(req.params.id);

    const foundFood = await food.findByPk(id);
    const deletedFood = await foundFood.destroy(req.body);
    res.status(200);
    res.send(deletedFood);
  } catch (e) {
    next(e);
  }
}

module.exports = router;
