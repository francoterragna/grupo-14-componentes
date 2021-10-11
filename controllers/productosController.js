const productosController = {
    // index: (req,res) => res.render ('productos'),
    detalle: (req,res) => res.render('detalleProducto'),
    carrito: (req,res) => res.render('carrito'),
    showProduct: (req,res) => res.render('productSelect')

}

module.exports = productosController;