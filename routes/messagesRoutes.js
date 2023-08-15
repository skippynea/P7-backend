const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const messagesCtrl = require('../controllers/messages');

router.get('/', messagesCtrl.getAllMessages);

module.exports = router;