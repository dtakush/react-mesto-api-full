const jwt = require('jsonwebtoken');

const Unauthorized = require('../errors/Unauthorized');

const { JWT_SECRET = 'super-strong-secret' } = process.env;

// eslint-disable-next-line
module.exports = (req, res, next) => {
  const { jwt: token } = req.cookies;
  if (!token) {
    throw new Unauthorized('В доступе на страницу отказано');
  }

  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Unauthorized(`В доступе на страницу отказано по причине ${err.message}`);
  }
  req.user = payload;
  next();
};
