const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const ProductInCart = db.define("products_in_cart", {
    id: {primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false},
    cartId: {type: DataTypes.INTEGER,
            allowNull: false,
            field: "cart_id"},
    productId: {type: DataTypes.INTEGER,
                allowNull: false,
                field: "product_id"},
    quantity: {type: DataTypes.INTEGER,
              defaultValue: 1,
              allowNull: false},
    price: {type: DataTypes.FLOAT,
            allowNull: false},
    status: {type: DataTypes.ENUM('not_purchased', 'purchased'),
            defaultValue: 'not_purchased'},
  },
  {
    timestamps: false,
  }
);

module.exports = ProductInCart;
