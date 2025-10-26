const router = require('express').Router();
const controller = require('../controllers/contactController');

router.post('/', controller.create);

module.exports = router;
