const express = require ('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const bcrypt = require('bcryptjs');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validationsRegister = require('../middlewares/validationRegister');


const { body } = require('express-validator')

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img/users'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });
const uploadFile = multer({ storage });

const usersController = require ('../controllers/usersControllers');

router.get('/register', guestMiddleware ,usersController.showRegister);
router.post('/register',uploadFile.single('img-profile'),validationsRegister ,usersController.saveRegister)


router.get('/login', guestMiddleware ,usersController.login);
router.post('/login',usersController.processLogin);

router.get('/profile', authMiddleware ,usersController.profile);

router.get('/editarPerfil/:id', authMiddleware, usersController.editarPerfil);
router.put('/editarPerfil/:id',usersController.actualizarUsuario);

router.get('/logout' ,usersController.logout);

module.exports = router;