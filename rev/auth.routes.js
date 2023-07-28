const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router(); //eslint-disable-line new-cap

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;