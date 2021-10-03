const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/agregarProducto', adminController.agregarProducto);
router.get('/modificarProducto', adminController.modificarProducto);

module.exports = router;

