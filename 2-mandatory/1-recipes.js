/*
  The Recipe Card
  Never forget another recipe!

  Create an object to hold information on your favorite recipe.

  It should have properties for

  - title (a string),
  - servings (a number), and
  - ingredients (an array of strings)

  On separate lines (one console.log statement for each), log the recipe information so it looks like:

  Mole
  Serves: 2
  Ingredients:
  cinnamon
  cumin
  cocoa

  You should write and log at least 5 recipes
*/

// write code here
let Recipe = {
    title: "Mole" ,        //(a string),
    servings: 2 ,    //a number), and
    ingredients: ["cinnamon", "cumin", "cocoa"]  //(an array of strings)

};
console.log(Recipe.title);
console.log(`Serves: ${Recipe.servings}`);
console.log(Recipe.ingredients[0]);
console.log(Recipe.ingredients[1]);
console.log(Recipe.ingredients[2]);