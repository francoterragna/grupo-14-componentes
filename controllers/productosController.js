const fs = require('fs');
const path = require ('path');
const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// const db = require('../database/models');

const productosController = {
    detalle: (req,res) =>{
        let id= req.params.id;
        let product = products.find(product => product.id == id);
        res.render('detalleProducto', {product});
    },
    carrito: (req,res) => res.render('carrito'),
     showProduct: (req,res) =>{
        let category = req.params.category;
        let productos = products.filter(producto => producto.category == category)
        res.render('productSelect', {productos})
        //db.Products.findAll()
        //.then(function(productos){
            //res.render('ProductSelect', {productos})
    },
    showDiscount: (req,res) => {
        let enOferta = products.filter(producto=> producto.discount > 0);
        res.render('ofertas', {enOferta});
    } 
}

module.exports = productosController;