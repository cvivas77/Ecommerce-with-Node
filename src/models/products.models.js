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
