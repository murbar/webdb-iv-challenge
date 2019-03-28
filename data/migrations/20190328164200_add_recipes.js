exports.up = function(knex) {
  return knex.schema.createTable('recipes', function(tbl) {
    tbl.increments();
    tbl
      .integer('dish_id')
      .unsigned()
      .notNullable() // is this necessary here?
      .references('id')
      .inTable('dishes');
    tbl
      .string('name', 128)
      .notNullable()
      .unique();
    tbl.text('method').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};
