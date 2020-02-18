const express = require('express');
const router = express.Router();

const controller = require('../../controllers/api/apiMoviesController')


router.get('/', controller.list);

router.get('/:id', controller.detail);

router.post('/', controller.create)

router.put('/:id', controller.edit)

router.delete('/:id', controller.delete)

module.exports = router;