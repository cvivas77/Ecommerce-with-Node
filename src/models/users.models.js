const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const Users = db.define('users', {
    id: {type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false},
    username: {type: DataTypes.STRING(30),
              allowNull: false,
              unique: true},
    email: {type: DataTypes.STRING(35),
            unique: true,
            allowNull: false,
            validate: {isEmail: true}},
    password: {type: DataTypes.STRING,
              allowNull: false},
  },
  {
    timestamps: false,
    hooks: {beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 10);
            user.password = hash;
      },
    },
  }
);

module.exports = Users;