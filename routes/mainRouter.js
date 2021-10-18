const express = require ('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');

router.get('/', mainController.index);

router.get('/pruebaSession', (req,res) =>{
    if(req.session.numeroDeVisitas == undefined){
        req.session.numeroDeVisitas= 0;
    }
    req.session.numeroDeVisitas++;
    res.send('Session tiene el número ' + req.session.numeroDeVisitas)
})

module.exports = router;