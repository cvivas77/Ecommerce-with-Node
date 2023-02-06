const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Cart = db.define("cart", {
    id: {primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false},
    userId: {type: DataTypes.INTEGER,
              allowNull: false,
            field: "user_id"},
    totalPrice: {type: DataTypes.FLOAT,
                  defaultValue: 0,
                  allowNull: true,
                  field: "total_price"},
  },
  {
    timestamps: false,
  }
);

module.exports = Cart;

/**
 * @openapi
 * components:
 *   schemas:
 *     getCart:
 *       type: object
 *       items:
 *       properties:
 *         id:
 *           type: integer
 *           example: 8
 *         userId:
 *           type: integer
 *           example: 6
 *         totalPrice:
 *           type: float
 *           example: 66.99
 *     getProductsInCart:
 *       type: object
 *       items:
 *       properties:
 *         id:
 *           type: integer
 *           example: 9
 *         cartId:
 *           type: integer
 *           example: 2
 *         productId:
 *           type: integer
 *           example: 8
 *         quantity:
 *           type: integer
 *           example: 10
 *         price:
 *           type: float
 *           example: 19.99
 *     addProductInCart:
 *       type: object
 *       items:
 *       properties:
 *         id:
 *           type: integer
 *           example: 6
 *         cartId:
 *           type: integer
 *           example: 7
 *         productId:
 *           type: integer
 *           example: 4
 *         quatity:
 *           type: integer
 *           example: 40
 *         price:
 *           type: float
 *           example: 9.99
 */
