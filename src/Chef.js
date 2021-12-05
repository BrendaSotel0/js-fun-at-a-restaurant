class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customer) {
    return `Hello, ${customer}!`
  }

}

module.exports = Chef;
