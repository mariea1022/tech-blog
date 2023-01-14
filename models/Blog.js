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
    user_id: {
        type: DataTypes.STRING,
        references: {
          // This references the `user` model
          model: 'user_id',
          key: 'id',
        },
    }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Blog;
