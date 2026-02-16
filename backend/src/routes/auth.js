const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.post('/signout', auth, authCtrl.logout);
module.exports = router;
