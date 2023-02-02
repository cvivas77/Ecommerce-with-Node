const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const ProductInOrder = db.define("products_in_order", {
    id: {primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false},
    orderId: {type: DataTypes.INTEGER,
              allowNull: false,
              field: "order_id"},
    productId: {type: DataTypes.INTEGER,
                allowNull: false,
                field: "product_id"},
    quantity: {type: DataTypes.INTEGER,
              allowNull: false},
    price: {type: DataTypes.FLOAT,
            allowNull: false},
    status: {type: DataTypes.ENUM('not_purchased', 'purchased'),
            defaultValue: 'purchased'}
  },
  {
    timestamps: false,
  }
);

module.exports = ProductInOrder;
