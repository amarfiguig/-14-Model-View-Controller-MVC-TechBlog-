const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./HomeRoutes.js');

router.use('/', HomeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
