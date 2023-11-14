const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const PostData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: {exclude: 'passwords'},
          },
        ],
        where:{
            user_id: req.session.user_id
        }
      });
  
      // Serialize data so the template can read it
      const posts = PostData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('profile', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post/:id', withAuth, async (req, res) => {
    try {
      const PostData = await Post.findByPk(req.params.id, {
        include: [
          { model: User, attributes: {exclude: 'password'}},
         
        ],
      });
  
      const post = PostData.get({ plain: true });
  
      res.render('postProfile', {
        post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports=router;