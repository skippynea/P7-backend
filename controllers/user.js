const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const User = require ('../models/user');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
      (hash) => {
        // console.log(req.body);
        const user = new User({
          userName : req.body.userName,
          email: req.body.email,
          password: hash
        });
      // console.log(user);
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