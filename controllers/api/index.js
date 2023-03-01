// Importing the required packages and modules
const router = require('express').Router();
const userRoutes = require('./UserRoutes.js');
const postRoutes = require('./PostRoutes');
const commentRoutes = require('./CommentRoutes');

// Adding middleware routes for users, posts, and comments
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// Exporting the router
module.exports = router;
