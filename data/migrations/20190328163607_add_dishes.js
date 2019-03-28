exports.up = function(knex) {
  return knex.schema.createTable('dishes', function(tbl) {
    tbl.increments();
    tbl
      .string('name', 128)
      .notNullable()
      .unique();
    tbl.string('cuisine', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dishes');
};
