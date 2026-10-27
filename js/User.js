export class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }
}