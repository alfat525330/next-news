const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');

// this fun is for to check user has passed valid token or not
module.exports = async function (req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ status:'false', message: 'No token', details: [] });
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) return res.status(401).json({ message: 'User not found' });
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ status:'false', message: 'Invalid token', details: [], error: e.message });
  }
};
