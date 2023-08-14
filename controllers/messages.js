// messages management

const Messages = require('../models/message');
const fs = require('fs');

exports.createMessages = (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    req.body.message = JSON.parse(req.body.message);
    const message = new Messages({
      title: req.body.message.title,
      description: req.body.message.description,
      imageUrl: url + '/images/' + req.file.filename,
      likes:0,
      dislikes:0,
      usersLiked:[],
      usersDisliked:[],
      userId: req.body.message.userId
    });
    message.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
  
        console.log("test")
        res.status(400).json({
          error: 'error !'
        });
      }
    );
  };
  
  exports.getOneMessages = (req, res, next) => {
    Message.findOne({
      _id: req.params.id
    }).then(
      (message) => {
        res.status(200).json(message);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
  
  exports.modifyMessages = (req, res, next) => {
    let message = new Message({ _id:req.params._id });
    // console.log(req.body);
    const url = req.protocol + '://' + req.get('host');
    if (req.file) {
      
      req.body.message = JSON.parse(req.body.message);
      // console.log('userId',req.body.message)
      message = {
        _id: req.params.id,
        title: req.body.message.title,
        description: req.body.message.description,
        imageUrl: url + '/images/' + req.file.filename,
        likes:0,
        dislikes:0,
        usersLiked:[],
        usersDisliked:[],
        userId: req.body.message.userId
      };
    } else {
      // console.log('userId',req.body.message)
      message = {
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId
      };
    }
    console.log(message);
    Message.updateOne({_id: req.params.id}, message).then(
      () => {
        res.status(201).json({
          message: 'Messages updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  exports.deleteMessages = (req, res, next) => {
    Message.findOne({_id: req.params.id}).then(
      (message) => {
        const filename = message.imageUrl.split('/images/')[1];
        fs.unlink('images/' + filename, () => {
          Message.deleteOne({_id: req.params.id}).then(
            () => {
              res.status(200).json({
                message: 'Deleted!'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
        });
      }
    );
  };

exports.getAllMessages = (req, res, next) => {
    Message.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
  