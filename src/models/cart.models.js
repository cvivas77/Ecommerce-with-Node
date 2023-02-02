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
