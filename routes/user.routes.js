const express = require('express');
const {
  userSignup,
  userLogin,
  homePage,
} = require('../controllers/user.controllers');
const { checkLoginUser } = require('../middleware/auth');

const router = express.Router();

router.post('/signup', userSignup);

router.post('/login', userLogin);

router.get('/home', checkLoginUser, homePage);

module.exports = router;
