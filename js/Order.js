export class Order {
  constructor(id, user) {
    this.id = id;
    this.user = user;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotal() {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}