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
    const uploadFile = multer({ storage });


const adminController = require('../controllers/adminController');
    
router.get('/agregarProducto', adminController.agregarProducto);
router.post('/agregarProducto',uploadFile.single('imagen-producto-nuevo') ,adminController.create);

router.get('/modificarProducto', adminController.modificarProducto);


module.exports = router;

