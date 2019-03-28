const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

function getDishes() {
  return db('dishes');
}

async function addDish(dish) {
  const [newDishId] = await db('dishes').insert(dish);
  return newDishId;
}

function getDish(id) {}

function getRecipes() {}

function addRecipe(recipe) {}

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};
