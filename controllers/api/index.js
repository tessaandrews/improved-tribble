const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
