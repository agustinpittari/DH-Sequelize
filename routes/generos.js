var express = require('express');
var router = express.Router();

const controller = require('../controllers/generosController')


router.get('/detail/:id', controller.detail);



module.exports = router;