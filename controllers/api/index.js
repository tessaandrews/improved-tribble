const router = require('express').Router();


const userRoutes = require('../../controllers/userRoutes');


router.use('/users', userRoutes);

module.exports = router;