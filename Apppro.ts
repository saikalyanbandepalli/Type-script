import { Product } from './Product';
import { Cart } from './Cart';
 
const cart = new Cart();
 
const product1 = new Product(1, 'product1', 11000);
const product2 = new Product(2, 'product2', 200);
const product3 = new Product(3, 'product3', 50);
 
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
 
cart.showCart();