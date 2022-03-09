const express = require('express');
const router = express.Router();

// internal import
const { getLogin } = require('../controlllers/loginController')

// login page
router.get('/', getLogin);

module.exports = router;
