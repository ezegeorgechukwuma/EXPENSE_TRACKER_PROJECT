const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer ')) {
    try {
      token = token.split(' ')[1]; // Remove "Bearer "
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      return res.status(401).json({ msg: 'Invalid or expired token' });
    }
  } else {
    return res.status(401).json({ msg: 'No token provided' });
  }
};

module.exports = protect;
// This middleware checks for a JWT in the Authorization header,