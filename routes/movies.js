var express = require('express');
var router = express.Router();

const controller = require('../controllers/moviesController')

/* GET home page. */
router.get('/', controller.index);

router.get('/new', controller.new)

router.get('/recommended', controller.recommended)

router.get('/detail/:id', controller.moviesDetail);

router.post('/search', controller.search)



module.exports = router;