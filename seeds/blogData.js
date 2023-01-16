const { Blog } = require("../models");

const blogData = [
  {
    blog_name: "Why MVC is so important",
    blog_content:
      "MVS allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic",
    user_id: 1
  },
  {
    blog_name: "Authentication vs. Authorization",
    blog_content:
      "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
    user_id: 2
  },
];

const seedBlogData = () => Blog.bulkCreate(blogData);

module.exports = seedBlogData;
