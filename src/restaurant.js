function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: menu = {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === 'breakfast' && !restaurant.menus.breakfast.includes(menuItem)) {
     restaurant.menus.breakfast.push(menuItem);
   }

   if (menuItem.type === 'lunch' && !restaurant.menus.lunch.includes(menuItem)) {
     restaurant.menus.lunch.push(menuItem);
   }

   if (menuItem.type === 'dinner' && !restaurant.menus.dinner.includes(menuItem)) {
     restaurant.menus.dinner.push(menuItem);
   }

  return restaurant;
}

function removeMenuItem(restaurant, item, type) {
  for (var i = 0; i < restaurant.menus[type].length; i++) {
      if (restaurant.menus[type][i].name === item) {
          restaurant.menus[type].splice(i, 1);
          return `No one is eating our ${item} - it has been removed from the ${type} menu!`
      }
  }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`;
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
