const { Comment } = require("../models");

const commentData = [
  {
    comment_content:
      "This way of organizing code really helps with team projects",
    user_id: 2,
    blog_id: 1,
  },
];

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;
