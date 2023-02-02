const db = require('../utils/database');
const Users = require('../models/users.models');
const Products = require('../models/products.models');
const Order = require('../models/order.models');
const Cart = require('../models/cart.models');
const ProductsInCart = require('../models/productInCart.models');
const ProductsInOrder = require('../models/productInOrder.models');
const initModels = require('../models/initModels');

initModels();

const users = [
  {username: "Carolina", email: "clvivas77@gmail.com", password: "4545"},
  {username: "Pepe", email: "gato@gmail.com", password: "87921"},
  {username: "Marianella", email: "mary@gmail.com", password: "9872"},
  {username: "Gabrielle", email: 'gabby@gmail.com', password: "1236"},
];

const products = [
  {name: "Lancôme La Vie est Belle", price: 50.00, availableQty: 60, image: "product1.jpg", status: 'not_purchased', userId: 1},
  {name: "Carolina Herrera Ean de Toilette", price: 66.00, availableQty: 100, image: "product2.jpg", status: 'purchased', userId: 2},
  {name: "Givenchy L'Interdit", price: 43.00, availableQty: 38, image: "product3.jpg", status: 'purchased', userId: 3},
  {name: "212 Vip Black", price: 71.99, availableQty: 30, image: "product4.jpg", status: 'not_purchased', userId: 4},
];

const orders = [
  {totalPrice: 50.00, userId: 1, status: 'purchased'},
  {totalPrice: 109.00, userId: 2, status: 'purchased'},
  {totalPrice: 66.00, userId: 3, status: 'purchased'},
  {totalPrice: 71.99, userId: 4,}
];

const carts = [
  {userId: 1, totalPrice: 50.00},
  {userId: 2, totalPrice: 109.00},
  {userId: 3, totalPrice: 66.00},
  {userId: 4, totalPrice: 71.99},
];

const productsInCart = [
  {cartId: 1, productId: 1, quantity: 1, price: 50.00, status: 'not_purchased'},
  {cartId: 2, productId: 2, quantity: 2, price: 66.00, status: 'purchased'},
  {cartId: 3, productId: 3, quantity: 3, price: 43.00},
  {cartId: 4, productId: 4, quantity: 4, price: 71.99, status: 'purchased'},
];

const productsInOrder = [
  {orderId: 1, productId: 1, quantity: 1, price: 50.00, status: 'not_purchased'},
  {orderId: 2, productId: 2, quantity: 2, price: 109.00},
  {orderId: 3, productId: 3, quantity: 3, price: 66.00, status: 'purchased'},
  {orderId: 4, productId: 4, quantity: 4, price: 71.99, status: 'not_purchased'},
];

db.sync({ force: true })
  .then(() => {
    console.log('starting seed');
    users.forEach((user) => {Users.create(user)});

    setTimeout(() => {
      products.forEach((product) => {Products.create(product)});
    }, 100);
    setTimeout(() => {
      orders.forEach((order) => {Order.create(order)});
    }, 250);
    setTimeout(() => {
      carts.forEach((cart) => {Cart.create(cart)});
    }, 400);
    setTimeout(() => {
      productsInCart.forEach((product) => {ProductsInCart.create(product)});
    }, 500);
    setTimeout(() => {
      productsInOrder.forEach((product) => {ProductsInOrder.create(product);
      });
    }, 750);
  })
  .catch((error) => console.log(error));