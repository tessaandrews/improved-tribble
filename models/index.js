const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.hasMany(Comment, {
  foreignKey: 'post_user',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_user',
});

module.exports = { User, Post, Comment };