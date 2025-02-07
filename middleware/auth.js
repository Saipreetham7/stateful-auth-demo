const { getUser } = require('../service/auth');

async function checkLoginUser(req, res, next) {
  const userUid = req.cookies.uid;

  if (!userUid) {
    return res.json({ message: 'User is logged in, try to login first' });
  }
  const user = getUser(userUid);
  if (!user) {
    return res.json({ message: 'User is logged in, try to login first' });
  }
  req.user = user;
  next();
}

module.exports = { checkLoginUser };
