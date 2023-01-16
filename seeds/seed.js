const sequelize = require("../config/connection");
// const { User, Blog, Comment } = require("../models");

const seedUserData = require("./userData");
const seedBlogData = require("./blogData");
const seedCommentData = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUserData();
  console.log('\n----- USER DATA SEEDED -----\n');

  await seedBlogData();
  console.log('\n----- BLOG DATA SEEDED -----\n');

  await seedCommentData();
  console.log('\n----- COMMENT DATA SEEDED -----\n');

  process.exit(0);
};

seedAll();
