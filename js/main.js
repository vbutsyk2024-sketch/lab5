import { Product } from './Product.js';
import { User } from './User.js';
import { Order } from './Order.js';

const user1 = new User(1, 'Іван Іванов', 'ivan@example.com');

const phone = new Product(101, 'Смартфон', 15000);
const laptop = new Product(102, 'Ноутбук', 35000);

const order1 = new Order(1, user1);
order1.addProduct(phone);
order1.addProduct(laptop);

user1.addOrder(order1);

console.log(user1.getOrders());