const router = require("express").Router();
const { Post, Comment } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all posts for the homepage
router.get("/", async (req, res) => {
  try {
    const PostData = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ["id", "date", "description"],
        },
      ],
    });

    const Posts = PostData.map((Post) =>
      Post.get({ plain: true })
    );
      console.log(Posts)
      const randomBlog = Posts[Math.floor(Math.random() * Posts.length)];
      console.log("RANDOM ELEMENT", randomBlog)
    res.render("homepage", {
      Posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blogpost
router.get("/Post/:id", withAuth, async (req, res) => {
  try {
    const PostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["id", "date", "description"],
        },
      ],
    });

    const Posts = PostData.get({ plain: true });
    console.log("Checking Posts")
    console.log(Posts)
    console.log(Posts.comment[0].description)
    res.render("Post", { Posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one comment by ID
router.get("/Comment", withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll();

    const Comments = dbCommentData.get({ plain: true });

    res.render("comment", { Comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Create a route to handle the form submission
router.post('/create-post', withAuth, async (req, res) => {
  try {
    // Get the data from the form
    const { title, category, description } = req.body;

    // Create a new blog post in the database
    const newPost = await Post.create({
      title,
      description,
      category,
      // Include other properties as needed
    });

    // Redirect to the page that displays the newly created blog post
    res.redirect(`/Post/${newPost.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Create a route to handle the form submission
router.post('/create-comment', withAuth, async (req, res) => {
  try {
    // Get the data from the form
    const { description } = req.body;

    const Comments = dbCommentData.get({ plain: true });

    // Create a new comment in the database
    const newComment = await Comments.create({
      description,
      // Include other properties as needed
    });

    // Redirect to the page that displays the newly created blog post
    res.redirect(`/Post/`);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});

module.exports = router;
