const User = require('../controllers/usersControllers');// Ésto tiene que venir desde el controller
const db = require('../database/models');

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;

    // let emailInCookie = req.cookies.userEmail;
    // let userFromCookie = db.User.findOne('email', emailInCookie);
    // if(userFromCookie){
    //     req.session.userLogged = userFromCookie
    // }

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    };
  

    next();
}

module.exports = userLoggedMiddleware;