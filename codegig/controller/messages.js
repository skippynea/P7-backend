// messages management

const Messages = require('../models/message');
const fs = require('fs');


exports.getAllMessages = (req, res, next) => {
    Messages.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
  