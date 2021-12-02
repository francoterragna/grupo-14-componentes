function adminMiddleware(req,res,next){
    if(req.session.userLogged.category !== 'admin'){
        return res.redirect('/')
    }
    next();
}

module.exports = adminMiddleware;