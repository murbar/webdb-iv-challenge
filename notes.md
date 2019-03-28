# Recipe book

- dishes

  - id
  - name
  - cuisine

- recipes

  - id
  - name
  - dish_id (FK ref dishes.id)
  - method

- ingredients

  - id
  - recipe_id (FK ref recipes.id)
  - name
  - quantity
  - unit
