// importing modules

require('dotenv').config();

const { Sequelize } = require('sequelize');
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
