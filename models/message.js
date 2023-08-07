/* 
Model Definition
*/

// importing modules
const Sequelize = require('sequelize');
const db = require('../config/database');

// model definition for "message"
const Message = db.define('message', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    
});

module.exports = Message;
