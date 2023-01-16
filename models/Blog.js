const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    blog_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog_content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          // This references the `user` model
          model: 'user',
          key: 'id',
        },
    }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;
