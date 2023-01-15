// import models
const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');

// a blog belongs to a user
Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

// a user can have many blogs
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// a comment belongs to a blog
Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

// a user can have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// a comment belongs to a user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

// a blog can have many comments
Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Blog,
  User,
  Comment,
};