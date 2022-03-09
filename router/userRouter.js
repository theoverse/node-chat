const express = require('express');
const router = express.Router();

// internal import
const { getUsers } = require('../controlllers/usersController')
const decorateHtmlResponse = require('../middlewares/commons/decorateHtmlResponse')

// user page
router.get('/', decorateHtmlResponse('User'), getUsers);

module.exports = router;
