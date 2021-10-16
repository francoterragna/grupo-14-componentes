const express = require ('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const { body } = require('express-validator')

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img/users'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });
const uploadFile = multer({ storage });

const validations = [
   body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),
   body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
   body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debes escribir un correo electrónico válido')
   ,
   body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
   
];

const usersController = require ('../controllers/usersControllers');

router.get('/register', usersController.showRegister);
router.post('/register',uploadFile.single('img-profile'),validations ,usersController.saveRegister)


router.get('/login', usersController.login);

router.get('/list', usersController.list);

module.exports = router;