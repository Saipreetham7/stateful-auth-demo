// const sessionIdToUser = new Map();
const jwt = require('jsonwebtoken');
const secret = 'newsecret@123';

// Stateful Authentication
// function setUser(id, user) {
//   sessionIdToUser.set(id, user);
// }

// function getUser(id) {
//   return sessionIdToUser.get(id);
// }

// Stateless Authentication
function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
    secret
  );
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}

module.exports = { setUser, getUser };
