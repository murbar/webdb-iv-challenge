const db = require('./data/db');

const tests = async () => {
  const dishes = await db.getDishes();
  console.log(dishes);
};

tests();
