// import models
const Blog = require('./Blog');
const User = require('./User');

// Products belongsTo Category
Blog.belongsTo(User, {
  foreignKey: 'user_name',
});

// Categories have many Products
User.hasMany(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Blog,
  User,
};