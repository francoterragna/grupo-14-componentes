const productosController = {
    detalle: (req,res) => res.render('detalleProducto'),
    carrito: (req,res) => res.render('carrito')
}

module.exports = productosController;