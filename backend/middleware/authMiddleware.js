const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.user._id).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401).send('Not authorized, token failed');
    }
  }else{
    res.status(401).json({message: 'Not authorized, no token'});
  }
};

module.exports = { protect };