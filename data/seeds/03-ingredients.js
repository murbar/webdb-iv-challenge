const faker = require('faker');

const createIngredient = () => ({
  recipe_id: faker.random.number({
    min: 1,
    max: 50
  }),
  name: faker.lorem.words(3),
  quantity: faker.random.arrayElement([
    1,
    2,
    3,
    4,
    0.5,
    0.25,
    0.75,
    1.5,
    2.5,
    3.5,
    1.25,
    2.25,
    3.25,
    1.75,
    2.75,
    3.75
  ]),
  unit: faker.random.arrayElement([
    'cup',
    'oz',
    'lb',
    'tbsp',
    'pinch',
    'stick',
    'quart',
    'tsp',
    'fl oz'
  ])
});

const buildIngredients = (count = 70) =>
  Array(count)
    .fill(null)
    .map(i => createIngredient());

exports.seed = function(knex) {
  knex('ingredients').insert(buildIngredients());
  knex('ingredients').insert(buildIngredients());
  knex('ingredients').insert(buildIngredients());
  return knex('ingredients').insert(buildIngredients());
};
