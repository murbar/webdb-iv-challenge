const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex);
  // after this command, all tables are empty
  // and all primary keys are reset
};
