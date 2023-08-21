// Access to the database
// File to hide the password

// module that loads environment variables 
// from a .env file 
// (Storing configuration in the environment separate from code)
require('dotenv').config();

// Importing modules
const path = require('path');
const express = require('express');

// using Express
const app = express();
app.use(express.json());

// i need the routes
const messagesRoutes = require('./routes/messagesRoutes');
const userRoutes = require('./routes/user');

// database connection (testing the connection)
const db = require('./config/database.js');
const { Server } = require('http');
db.authenticate().then(() => {
  console.log('Database connected successfully...');
}).catch(err => {
  console.log('Unable to connect to the database ! Error: ' + err);
})

// i need some headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// path to the folder to store the "images"
// app.use ('/images', express.static(path.join(__dirname, 'images')));

// i need an "app.use" for the POST
// app.use('/api/messages', messagesRoutes);
// app.use('/api/auth', userRoutes);

module.exports = app;