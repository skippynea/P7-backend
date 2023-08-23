/* 
Model Definition
*/

// importing modules
const {Sequelize,DataTypes} = require('sequelize');
const db = require('../config/database');

// model definition for "user"
// set up the 'user' schema with Sequelize
const User = db.define('user', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true, //checks for email format
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },  
});

// Creation of the database table for the "User" model :
// Check the current state of the table in the database and perform necessary changes in the table to make it match the model. 
User.sync({ alter: true }).then(() => {
    console.log("User Model synced");
});

module.exports = User;