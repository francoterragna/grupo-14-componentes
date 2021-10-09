const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/img/users'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });
const uploadFile = multer({ storage });
const usersController = require ('../controllers/usersControllers');


router.get('/register', usersController.showRegister);
router.post('/register',uploadFile.single('img-profile') ,usersController.saveRegister)


router.get('/login', usersController.login);

router.get('/list', usersController.list);

module.exports = router;