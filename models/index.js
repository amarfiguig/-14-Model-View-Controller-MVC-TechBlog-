// Import necessary models
const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

// Define associations between models
// One-to-many relationship between User and Post models
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// Many-to-many relationship between User and Post models through the Vote model
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

// One-to-many relationship between User and Vote models
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

// One-to-many relationship between Post and Vote models
Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

// One-to-many relationship between User and Comment models
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// One-to-many relationship between Post and Comment models
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

// Export all models
module.exports = { User, Post, Vote, Comment };
