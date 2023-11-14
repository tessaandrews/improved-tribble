const router = require('express').Router();
const { Post, User,Comment } = require('../models');


router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const PostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: {exclude: 'passwords'},
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = PostData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const PostData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: {exclude: 'password'}},
        {
          model: Comment, include: [{model: User, attributes: {exclude:'password'}}]

        },
      ],
    });

    const posts = PostData.get({ plain: true });

    res.render('singlePost', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;