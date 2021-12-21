const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
        cb(null, './public/img/products'); 
    }, 
    filename: function (req, file, cb) { 
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
    });
    const uploadFile = multer({ storage:storage });


const adminController = require('../controllers/adminController');
const adminMiddleware = require('../middlewares/adminMiddleware')
    
router.get('/agregarProducto', adminMiddleware,adminController.agregarProducto);
router.post('/agregarProducto',uploadFile.array('imagenProductoNuevo', 3), adminController.create); 

router.get('/modificarProducto/:id',adminMiddleware ,adminController.modificarProducto);
router.put('/modificarProducto/:id',uploadFile.array('imagenProductoModificado', 3),adminController.enviarCambios);
router.delete('/eliminar/:id', adminController.delete);


module.exports = router;

