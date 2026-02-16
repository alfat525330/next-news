const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const News = sequelize.define(
  'News',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    content: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM('draft', 'published'),
      defaultValue: 'draft',
    },

    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'news',
    timestamps: true,
  }
);

/* Relations */

News.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(News, { foreignKey: 'user_id' });

module.exports = News;
