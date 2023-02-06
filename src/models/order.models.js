const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Order = db.define("order", {
    id: {autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false},
    totalPrice: {type: DataTypes.FLOAT,
                allowNull: false,
                field: "total_price"},
    userId: {type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id"},
    status: {type: DataTypes.ENUM('not_purchased', 'purchased'),
            defaultValue: 'purchased'},
  },
  {
    timestamps: false,
  }
);

module.exports = Order;

/**
 * @openapi
 * components:
 *   schemas:
 *     gerOrder:
 *       type: object
 *       properties:
 *         id:
 *          type: integer
 *          example: 4
 *         totalPrice:
 *           type: float
 *           example: 71.25
 *         userId:
 *           type: integer
 *           example: 9
 */
