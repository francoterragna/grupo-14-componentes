const express = require ('express');
const router = express.Router();

const apiProductsController = require ('../../controllers/api/apiProductsController');

router.get('/buscar', apiProductsController.search)
router.get('/:id', apiProductsController.show);
router.get('/', apiProductsController.list);

module.exports = router;