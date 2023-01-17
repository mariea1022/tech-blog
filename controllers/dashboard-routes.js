const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Blog.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "blog_name", "blog_content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_content", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBlogData) => {
      const blogs = dbBlogData.map((blog) =>
        blog.get({
          plain: true,
        })
      );
      res.render("dashboard", {
        posts,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Blog.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "blog_name", "blog_content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_content", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbBlogData) => {
      if (!dbBlogData) {
        res.status(404).json({
          message: "No post found with this id",
        });
        return;
      }

      const blog = dbBlogData.get({
        plain: true,
      });

      res.render("update-delete", {
        blog,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/new", (req, res) => {
  res.render("newblog", {
    loggedIn: true,
  });
});

module.exports = router;
