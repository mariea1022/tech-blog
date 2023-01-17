const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const withAuth = require('../utils/auth');

// get hompage with existing blg posts
router.get("/", async (req, res) => {
  try {
    // we need to get all Posts and include the User for each
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    // serialize the data
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    // render all the posts here
    res.render("homepage", { blogs, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post only after user has logged in
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findOne({
      where: { id: req.params.id },
      include: [
        User,
        {
          model: Comment,
          include: User,
        },
      ],
    });

    if (postData) {
      const blog = blogData.get({ plain: true });
      console.log(blog);
      res.render("single-post", { post, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// get signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

module.exports = router;
