const express = require('express');
const router = express.Router();

// internal import
const { getLogin } = require('../controlllers/loginController');
const decorateHtmlResponse = require('../middlewares/commons/decorateHtmlResponse')

// login page
router.get('/', decorateHtmlResponse('Login'), getLogin);

module.exports = router;
