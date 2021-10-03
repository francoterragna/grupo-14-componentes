const express = require ('express');
const router = express.Router();
const usersController = require ('../controllers/usersControllers');

router.get('/register', usersController.register);

router.get('/login', usersController.login);

router.get('/list', usersController.list);

module.exports = router;