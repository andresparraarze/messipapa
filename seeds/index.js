const {User, Post, Comment} = require('../models');

const users = [
   { username: 'Andres',
    password: 'password123'},

    { username: 'Juan',
    password: 'nose123'},

    { username: 'Dmytro',
    password: 'priyet123'},

    { username: 'Owen',
    password: 'country123'},
]

const posts = [
    {
        title: 'No war',
        content: 'i dont like war',
        user_id: 3
    },

    {
        title: 'Too cold',
        content: 'Canada is too cold for me',
        user_id: 1
    },

    {
        title: 'Country',
        content: 'i love the countryside',
        user_id: 4
    },

    {
        title: 'Pizzapockets',
        content: 'Nice',
        user_id: 2
    },
]

const comments = [
    {
        content: 'lazy',
        user_id: 1,
        post_id: 1
    },

    {
        content: 'i agree',
        user_id: 3,
        post_id: 1
    },
]

const plantSeeds= async () => {
    await User.bulkCreate(users, {individualHooks: true});
    await Post.bulkCreate(posts);
    await Comment.bulkCreate(comments);
};

plantSeeds();