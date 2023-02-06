const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Product = db.define('product', {
    id: {primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false},
    name: {type: DataTypes.STRING(50),
          allowNull: false},
    price: {type: DataTypes.FLOAT,
            allowNull: false},
    availableQty: {type: DataTypes.INTEGER,
                  allowNull: false},
    image: {type: DataTypes.STRING,
            allowNull: true},
    status: {type: DataTypes.ENUM('not_purchased', 'purchased'),
            defaultValue: 'not_purchased'},
    userId: {type: DataTypes.INTEGER,
              allowNull: false,
             field: "user_id"},
  },
  {
    timestamps: false,
  }
);

module.exports = Product;

/**
 * @openapi
 * components:
 *   schemas:
 *     getAllProducts:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 3
 *         name:
 *           type: string
 *           example: Perfume Hubo Boss
 *         price:
 *           type: float
 *           example: 49.99
 *         availableQty:
 *           type: integer
 *           example: 20
 *         image:
 *           type: string
 *           example: image.jpg
 *         userId:
 *           type: integer
 *           example: 4
 *     createProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: One Millon
 *         price:
 *           type: float
 *           example: 50.99
 *         availableQty:
 *           type: integer
 *           example: 100
 *         image:
 *           type: string
 *           example: image.jpg
 */
