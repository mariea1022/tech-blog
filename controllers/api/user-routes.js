const router = require("express").Router();
const { Blog, User, Comment } = require("../../models");


router.get("/:id", (req, res) => {
  User.findOne({
      where: {
          id: req.params.id,
      },
      attributes: ["username"],
      include: [{
          model: Blog,
          attributes: ["id", "blog_name", "blog_content", "user_id"],
      },
      {
          model: Comment,
          attributes: ["id", "comment_content", "blog_id", "user_id", "created_at"],
          include: {
              model: User,
              attributes: ["username"],
          },
      },
      ],
  })
      .then((dbPostData) => {
          if (!dbPostData) {
              res.status(404).json({
                  message: "No post found with this id"
              });
              return;
          }
          res.json(dbPostData);
      })
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
      });
});

// to create a new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      // email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// to login using username and password
router.post("/login", async (req, res) => {
    console.log(req.body, "req.body")
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({
            user: dbUserData,
            message: 'You are now logged in!'
        });
    });

    // req.session.save(() => {
    //     req.session.user_id = dbUserData.id;
    //     req.session.username = dbUserData.username;
    //     req.session.loggedIn = true;

    //   res
    //     .status(200)
    //     .json({ user: dbUserData, message: "You are now logged in!" });
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// to logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
