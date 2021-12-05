function nameMenuItem(meal) {
  return `Delicious ${meal}`;
}

function createMenuItem(mealName, mealPrice, mealType) {
  var menuDescription = {
    name: mealName,
    price: mealPrice,
    type: mealType,
  }
  return menuDescription;
}

function addIngredients(item, ingredientList) {
  if (ingredientList.includes(item)) {
    return ingredientList;
  }
  ingredientList.push(item);
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price * 0.90;
}

function createRecipe(titleName, ingredientsName, typeName) {
  var newRecipe = {
    title: titleName,
    ingredients: ingredientsName,
    type: typeName,
  }
  return newRecipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
