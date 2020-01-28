var express = require('express');
var router = express.Router();

const controller = require('../controllers/actorsController')


router.get('/detail/:id', controller.detail);



module.exports = router;