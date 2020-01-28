var express = require('express');
var router = express.Router();

const controller = require('../controllers/moviesController')

/* GET home page. */
router.get('/', controller.index);

router.get('/new', controller.new)

router.get('/recommended', controller.recommended)

router.post('/search', controller.search)

router.get('/detail/:id', controller.moviesDetail);

// Crear
router.get('/create', controller.createForm)
router.post('/create', controller.create)

// Editar
router.get('/edit/:id', controller.editForm)
router.put('/edit/:id', controller.edit)

// Eliminar
router.delete('/delete/:id', controller.delete)

module.exports = router;