const express = require ('express');
const router = express.Router();

const apiProductsController = require ('../../controllers/api/apiProductsController');

router.get('/buscar', apiProductsController.search)
router.get('/:id', apiProductsController.show);
router.get('/', apiProductsController.list);
router.post('/crear', apiProductsController.store);
router.delete('/:id', apiProductsController.delete)

module.exports = router;