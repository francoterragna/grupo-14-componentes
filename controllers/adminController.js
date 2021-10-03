const adminController = {
    modificarProducto: (req,res) => res.render('modificarProducto'),
    agregarProducto: (req,res) => res.render('agregarProducto'),
};

module.exports = adminController;