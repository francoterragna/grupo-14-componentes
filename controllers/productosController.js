const fs = require('fs');
const path = require ('path');
const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const db = require('../database/models');
//const sequelize = db.sequelize

const productosController = {
    detalle: (req,res) =>{
        let id= req.params.id;
        let product = products.find(product => product.id == id);
        res.render('detalleProducto', {product});
        //db.Product.findByPk(id)
        //.then(product => res.render('detalleProducto', {product})
        //.catch(err => res.send(err))
    },
    carrito: (req,res) => res.render('carrito'),
     showProduct: (req,res) =>{
        let category = req.params.category;
        let productos = products.filter(producto => producto.category == category)
        res.render('productSelect', {productos})
        //db.Product.findAll()
        //.then(function(productos){
            //res.render('ProductSelect', {productos}))
            //.catch(err => res.send(err))
    },
    showDiscount: (req,res) => {
        let enOferta = products.filter(producto=> producto.discount > 0);
        res.render('ofertas', {enOferta});
        //db.Product.findAll({
            //where: {
                //discount: {[db.Sequelize.Op.gt]:0}
            //}
        //})
        //.then(enOferta => res.render('ofertas', {enOferta}))
        //.catch(err => res.send(err))
    } 
}

module.exports = productosController;