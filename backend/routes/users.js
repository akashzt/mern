var express = require('express');
const { createUser, createImage } = require('../controller/user');
var router = express.Router();

/* GET users listing. */
router.post('/user', createUser);
router.post('/image',createImage)


module.exports = router;
