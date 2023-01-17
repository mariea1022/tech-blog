const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const blogRoutes = require('./blog-routes');
const userRoutes = require('./user-routes');

router.use('/comments', commentRoutes);
router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);

module.exports = router;