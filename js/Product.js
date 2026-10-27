export class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} — ${this.price} грн`;
  }
}

export class DiscountedProduct extends Product {
  constructor(id, name, price, discountPercent) {
    super(id, name, price);
    this.discountPercent = discountPercent;
  }

  getFinalPrice() {
    return this.price * (1 - this.discountPercent / 100);
  }
}