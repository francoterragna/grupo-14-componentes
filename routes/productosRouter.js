const express = require ('express');
const router = express.Router();
const productosController = require ('../controllers/productosController')

// router.get('/', productosController.index);
router.get('/detalle', productosController.detalle);
router.get('/carrito', productosController.carrito);
router.get('/category', productosController.showProduct)

module.exports = router;