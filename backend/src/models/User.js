const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  contact_number: { type: DataTypes.STRING, allowNull: true },
  password_hash: { type: DataTypes.STRING, allowNull: false },
  profile_image_url: { type: DataTypes.STRING, allowNull: true },
}, { tableName: 'users' });

module.exports = User;
