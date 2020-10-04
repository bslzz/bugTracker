const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token)
      return res.status(401).json({ msg: 'Unauthorized token, Access denied' });

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded)
      return res.status(401).json({ msg: 'Unauthorized User, Access denied' });
    req.userData = decoded;
    next();
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

module.exports = checkAuth;
