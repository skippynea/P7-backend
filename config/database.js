// importing modules
const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');

//Database connection with dialect of postgres specifying the database we are using
//Database name "DB_NAME", database user "DB_USER", and database password "DB_PASSWORD" : are stored in .env file for security. 

// creation of a Sequelize instance to connect to the database
const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;
