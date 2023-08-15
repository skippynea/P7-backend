const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const User = require ('../models/user');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
      (hash) => {
        const user = new User({
          userName : req.body.userName,
          email: req.body.email,
          password: hash
        });
        User.create(user).then(
          () => {
            res.status(201).json({
              message: 'User added successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    );
  };