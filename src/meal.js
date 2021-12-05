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

function addIngredients(item, array) {
  if (array.includes(item)) {
    return array;
  }
  array.push(item);
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price * 0.90;
}

function createRecipe(titleName, ingredientsName, typeName) {
  var potato = {
    title: titleName,
    ingredients: ingredientsName,
    type: typeName,
  }
  return potato
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
