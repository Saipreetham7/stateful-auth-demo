const { getUser } = require('../service/auth');

async function checkLoginUser(req, res, next) {
  const userToken = req.cookies.token;

  if (!userToken) {
    return res.json({ message: 'User is logged in, try to login first' });
  }
  const user = getUser(userToken);
  if (!user) {
    return res.json({ message: 'User is logged in, try to login first' });
  }
  req.user = user;
  next();
}

module.exports = { checkLoginUser };
