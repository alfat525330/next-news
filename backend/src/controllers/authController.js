const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();
const { Op } = require('sequelize');

// this fun is for to register user
exports.register = async (req, res) => {
  try {
    const { name, username, email, contact_number, password } = req.body;
    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields', status: 'false', details: [] });
    }
    // const exists = await User.findOne({ where: { [User.sequelize.Op.or]: [{ username }, { email }] }});
    const exists = await User.findOne({
      where: {
        [Op.or]: [
          { username: username },
          { email: email }
        ]
      }
    });
    if (exists) return res.status(200).json({ message: 'Username or Email already exists' , status: 'false', details: []});
    // Optional profile picture
    const profileImage = req.file ? `/uploads/${req.file.filename}` : null;
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name, 
      username, 
      email, 
      contact_number, 
      password_hash: hash,
      profile_image_url: profileImage,  
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({ 
      status : true,
      message: 'registration Succefully',
      details:{
        user: { id: user.id, name: user.name, username: user.username, email: user.email }, 
        // token: token, 
      }
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status:false, message: 'Server error', error: e.message , details: []});
  }
};

// this api is for to get user login credential and allow login access token
exports.login = async (req, res) => {
  try {
    console.log('login')
    const { email, password } = req.body;
    // return false;
    const user = await User.findOne({
      where: {
        [Op.or]: [
          { username: email },
          { email: email }
        ]
      }
    });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' , status: 'false', details: []});
    const ok = await bcrypt.compare(password, user.password_hash);

    if (!ok) return res.status(400).json({ message: 'Invalid credentials' , status: 'false', details: []});
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    console.log('login-token',token)

    res.status(200).json({ 
      status : true,
      message: 'login Succefully',
      details:{
        user: { id: user.id, name: user.name, username: user.username, email: user.email, profile_picture : user.profile_image_url }, 
        token: token, 
      }
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: false, message: 'Server error', error: e.message , details: []});
  }
};

// this fun is for to logout user
exports.logout = async (req, res) => {
  try {
    return res.json({
      status: true,
      message: 'Logged out successfully',
      details:[]
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'Logout failed',
      details:[]
    });
  }
};
