class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customer, morning) {
    if (morning === true) {
      return `Good morning, ${customer}!`
    }
    return `Hello, ${customer}!`
  }

  checkForFood(item) {
    for (var i = 0; i < this.restaurant.menus[item.type].length; i++) {
      if (this.restaurant.menus[item.type][i].type === item.type) {
        return `Yes, we're serving ${item.name} today!`;
      }
    }
    return `Sorry, we aren't serving ${item.name} today.`
  }

}

module.exports = Chef;
