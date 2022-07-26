const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post,{
    foreingKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment,{
    foreingKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User,{
    foreingKey: 'user_id',
    onDelete:'CASCADE'
});

Post.hasMany(Comment,{
    foreingKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User,{
    foreingKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post,{
    foreingKey: 'post_id',
    onDelete:'CASCADE'
});

module.exports = { User, Comment, Post };