const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');



const Users = db.define('users', {
    id: {type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false},
    username: {type: DataTypes.STRING(20),
              allowNull: false},
    email: {type: DataTypes.STRING(45),
            unique: true,
            allowNull: false,
            validate: {isEmail: true}},
    password: {type: DataTypes.STRING,
              allowNull: false},
    isConfirmed: {type: DataTypes.BOOLEAN,
                  field: "is_confirmed",
                  defaultValue: false},
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


/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Carolina
 *         email:
 *           type: string
 *           example: clvivas@gmail.com
 *         password:
 *           type: string
 *           example: 123456
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: gato@gmail.com
 *         password:
 *           type: string
 *           example: 123456
 *     loginResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: interger
 *           example: 1
 *         username:
 *           type: string
 *           example: gato@gmail.com
 *         token:
 *           type: string
 *           example: $2b$10$6vl67iAqBvOmMQoDHmtvJeauJdTWlEylj0h1lFP4M2LecG3T41ahq
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       schema: bearer
 *       bearerFormat: JWT
 */