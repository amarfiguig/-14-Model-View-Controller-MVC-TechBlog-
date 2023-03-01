const router = require("express").Router();
const { Post, User, Comment, Vote } = require("../models");
const sequelize = require("../config/connection");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    // Find all posts with vote count
    const dbPostData = await Post.findAll({
      attributes: [
        "id",
        "post_url",
        "title",
        "created_at",
        [
          sequelize.literal(`(
            SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id
          )`),
          "vote_count"
        ]
      ],
      order: [["created_at", "DESC"]],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at"
          ],
          include: {
            model: User,
            attributes: ["username"]
          }
        },
        {
          model: User,
          attributes: ["username"]
        }
      ]
    });

    // Serialize data so template can read it
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET login page
router.get("/login", (req, res) => {
  // Redirect to homepage if user is already logged in
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  // Render login page
  res.render("login");
});

module.exports = router;
