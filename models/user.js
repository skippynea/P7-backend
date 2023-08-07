/* 
Model Definition
*/

// importing modules
const Sequelize = require('sequelize');
const db = require('../config/database');

// model definition for "user"
const User = db.define('user', {
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        isEmail: true, //checks for email format
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },  
});

module.exports = User;