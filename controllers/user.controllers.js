const { User } = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../service/auth');

async function userSignup(req, res) {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: 'User with this email already exists' });
  }
  const newUser = new User({
    name,
    email,
    password,
  });
  await newUser.save();
  return res.status(201).json({
    message: 'User created successfully',
    email: newUser.email,
    id: newUser._id,
  });
}

async function userLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res
      .status(404)
      .json({ error: 'Invalid credentials, User not found!' });
  }
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie('uid', sessionId);
  return res.status(200).json({
    message: 'user loggedin in successfully',
    id: user._id,
    email: user.email,
    name: user.name,
  });
}

async function homePage(req, res) {
  const user = req.user;
  if (!user) {
    return res.json({ message: 'User not logged in!' });
  }
  return res.json({ message: `Hello ${user.name}, Welcome to the dashboard` });
}

module.exports = { userSignup, userLogin, homePage };
