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

function addMenuItem(restaurant, item) {

  if (item.type === 'breakfast' && !restaurant.menus.breakfast.includes(item)) {
     restaurant.menus.breakfast.push(item);
   }

   if (item.type === 'lunch' && !restaurant.menus.lunch.includes(item)) {
     restaurant.menus.lunch.push(item);
   }

   if (item.type === 'dinner' && !restaurant.menus.dinner.includes(item)) {
     restaurant.menus.dinner.push(item);
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

 //  if ("breakfast" === type && !restaurant.menus.breakfast.includes(item)) {
 //    restaurant.menus.breakfast.splice(item, 1);
 //
 //  }
 //   if ("lunch" === type && !restaurant.menus.lunch.includes(item)) {
 //   restaurant.menus.lunch.splice(item, 1)
 // }
 //  if ("dinner" === type && !restaurant.menus.dinner.includes(item)) {
 //    restaurant.menus.dinner.splice(item, 1)
 // }
 // return `No one is eating our ${item} - it has been removed from the ${type} menu!`



}

//`Sorry, we don't sell ${item}, try adding a new recipe!`

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

//  if ("breakfast" === type) {
//     if (!restaurant.menus.breakfast.includes(item)) {
//     return `Sorry, we don't sell ${item}, try adding a new recipe!`
//   }
//   restaurant.menus.breakfast.splice(item, 1);
//   return `No one is eating our ${item} - it has been removed from the ${type} menu!`
// } else if ("lunch" === type) {
//   if (!restaurant.menus.lunch.includes(item)) {
//     return `Sorry, we don't sell ${item}, try adding a new recipe!`
//   }
//   restaurant.menus.lunch.splice(item, 1);
//   return `No one is eating our ${item} - it has been removed from the ${type} menu!`
// } else if ("dinner" === type) {
//   if (!restaurant.menus.dinner.includes(item)) {
//
//   }
// }
