const express = require ('express');
const router = express.Router();
const productosController = require ('../controllers/productosController')

// router.get('/', productosController.index);
router.get('/detalle/:id', productosController.detalle);
router.get('/carrito', productosController.carrito);
router.get('/ofertas', productosController.showDiscount);
router.post('/search', productosController.search);
router.get('/:category', productosController.showProduct);

module.exports = router;