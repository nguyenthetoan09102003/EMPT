const express = require('express');
const router = express.Router();
const formController = require('../Controllers/formController');

router.get('/', formController.getForm);
router.post('/submit', formController.postForm);

module.exports = router;
