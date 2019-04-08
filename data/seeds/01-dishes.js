exports.seed = function(knex) {
  return knex('dishes').insert([
    { name: 'Pizza', cuisine: 'Italian' },
    { name: 'Tacos', cuisine: 'Mexican' },
    { name: 'Pad Thai', cuisine: 'Thai' },
    { name: 'Lasagna', cuisine: 'Italian' },
    { name: 'Enchiladas', cuisine: 'Mexican' },
    { name: 'Peking Duck', cuisine: 'Chinese' },
    { name: 'Biryani', cuisine: 'Indian' },
    { name: 'Baklava', cuisine: 'Greek' },
    { name: 'Bibimbap', cuisine: 'Korean' },
    { name: 'Pot Roast', cuisine: 'American' },
    { name: 'Arepas', cuisine: 'Colombian' }
  ]);
};
