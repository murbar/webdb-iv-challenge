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

async function getDish(id) {
  // not sure if I should be doing two queries here like so, or some sort of join op
  // this feels right
  const dish = await db('dishes')
    .where({ id })
    .first();
  dish.recipes = await db('recipes').where({ dish_id: dish.id });
  return dish;
}

function getRecipes() {
  return db('recipes')
    .join('dishes', 'recipes.dish_id', 'dishes.id')
    .select(
      'recipes.id',
      'recipes.name',
      'recipes.method',
      'dishes.name as dish',
      'dishes.cuisine'
    );
}

function addRecipe(recipe) {}

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};
