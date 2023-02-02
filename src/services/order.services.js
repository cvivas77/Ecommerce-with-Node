const Order = require('../models/order.models');
const Users = require('../models/users.models');
const Cart = require('../models/cart.models');
const ProductsInCart = require('../models/productInCart.models');
const ProductsInOrder = require('../models/productInOrder.models');
const Product = require('../models/products.models');
const CartServices = require('./cart.services');

class OrderServices {
  static async gerOrders(userId) {
    try {
      const orders = await Order.findAll({
        where: { userId },
        include: {model: ProductsInOrder,
                  as: 'productsInOrder',
        include: {model: Product,
                  as: 'product'},
        },
      });
      return orders;
    } catch (error) {
      throw error;
    }
  }

  static async getOrderNotPurchased(id) {
    try {
      const result = await Order.findOne({
        where: {userId: id,
                status: 'not_purchased'},
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getProductsInOrder(id) {
    try {
      const productsInOrder = await ProductsInOrder.findAll({
        where: { order_id: id },
      });
      return productsInOrder;
    } catch (error) {
      throw error;
    }
  }

  static async makeOrder(userId) {
    try {
      const orderNotPurchased = await this.getOrderNotPurchased(user_id);
      const cart = await Cart.findOne({
        where: { userId },
      });
      await Cart.update({ totalPrice: 0 },
                        {where: { userId }}
      );
      await ProductsInCart.destroy({where: { cartId: cart.id },
      });
      await ProductsInOrder.update({ status: 'purchased' },
                                   {where: { orderId: orderNotPurchased.id }}
      );
      const order = Order.update({ status: 'purchased' },
                                {where: {userId, status: 'not_purchased'}}
      );
      return order;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderServices;