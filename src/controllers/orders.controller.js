const OrderServices = require('../services/order.services');


const gerOrders = async(req, res, next) => {
  try {
    const userId = req.user.id;
    const orders = await OrderServices.gerOrders(userId);
    res.json(orders);
  } catch (error) {
    next(error);
  }
}

const makeOrder = async (req, res, next) => {
  try {
    const userId = req.user.id
    const order = await OrderServices.makeOrder(userId);
    res.json(order);
  } catch (error) {
    next(error);
  }
}

module.exports = {gerOrders, makeOrder};