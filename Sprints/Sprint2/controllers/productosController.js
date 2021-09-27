const productosController = {
    detalle: (req,res) => res.render('producto'),
    carrito: (req,res) => res.render('carrito')
}

module.exports = productosController;