exports.up = function(knex) {
  return knex.schema.createTable('ingredients', function(tbl) {
    tbl.increments();
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable() // is this necessary here?
      .references('id')
      .inTable('recipes');
    tbl
      .string('name', 128)
      .notNullable()
      .unique();
    tbl.float('quantity').notNullable();
    tbl.string('unit');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients');
};
