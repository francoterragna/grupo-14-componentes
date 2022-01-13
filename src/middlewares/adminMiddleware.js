function adminMiddleware(req,res,next){
    if(req.session.userLogged.category !== 'admin'){
        return res.redirect('/')
    }else{
        next();
    }
}

module.exports = adminMiddleware;