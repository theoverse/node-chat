const express = require('express');
const router = express.Router();

// internal import
const { getInbox } = require('../controlllers/inboxController')
const decorateHtmlResponse = require('../middlewares/commons/decorateHtmlResponse')

// inbox page
router.get('/', decorateHtmlResponse('Inbox'), getInbox);

module.exports = router;