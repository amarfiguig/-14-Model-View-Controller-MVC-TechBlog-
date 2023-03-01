const router = require("express").Router();
const sequelize = require('../../config/connection');
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// Route to create a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newItem = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to delete a post by ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!postData) {
      res
        .status(404)
        .json({ message: "Sorry, no post was found with this ID" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
