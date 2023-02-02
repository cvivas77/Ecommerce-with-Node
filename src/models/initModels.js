const Users = require('./users.models');
const Cart = require('./cart.models');
const Order = require('./order.models');
const Products = require('./products.models');
const ProductInOrder = require('./productInOrder.models');
const ProductInCart = require('./productInCart.models');

const initModels = () => {
  
  //users/products
  Users.hasMany(Products, {as: 'products', foreignKey: 'user_id'});
  Products.belongsTo(Users, {as: 'user', foreignKey: 'user_id'});

  //users/orders
  Users.hasMany(Order, {as: 'orders', foreignKey: 'user_id'});
  Order.belongsTo(Users, {as: 'user', foreignKey: 'user_id'});

  //users/cart
  Users.hasOne(Cart, {as: 'cart', foreignKey: 'user_id'});
  Cart.belongsTo(Users, {as: 'user', foreignKey: 'user_id'});

  //product/productInCart
  ProductInCart.hasOne(Products, {as: 'product', foreignKey: 'product_id'});

  //product/productInOrder
  Products.hasOne(ProductInOrder, {as: 'productInOrder', foreignKey: 'product_id'});

  //productInCart/cart
  ProductInCart.belongsTo(Cart, {as: 'cart', foreignKey: 'cart_id'});
  Cart.hasMany(ProductInCart, {as: 'productsInCart', foreignKey: 'cart_id'});

  //productInOrder/order
  ProductInOrder.belongsTo(Order, {as: 'order', foreignKey: 'order_id'});
  Order.hasMany(ProductInOrder, {as: 'productsInOrder', foreignKey: 'order_id'});
};

module.exports = initModels;
