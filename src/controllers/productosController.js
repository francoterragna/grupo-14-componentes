const fs = require('fs');
const path = require ('path');

const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const productsFilePath = path.join(__dirname, '../../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productosController = {
    detalle: (req,res) =>{
        let id= req.params.id;
        // let product = products.find(product => product.id == id);
        // res.render('detalleProducto', {product});
        db.Product.findByPk(id)
        .then(product => res.render('detalleProducto', {product}))
        .catch(err => res.send(err))
    },
    carrito: (req,res) => res.render('carrito'),

     showProduct: (req,res) =>{
        // let category = req.params.category;
        // let productos = products.filter(producto => producto.category == category)
        // res.render('productSelect', {productos})
        db.Product.findAll({
            where: {
                category: req.params.category
            }})
        .then((productos)=> {
            db.Image.findAll()
            .then((img) => res.render('productSelect', {productos, img}))
            })
        .catch(err => res.send(err));

    },
    //HAY QUE APLICAR EL OFFSET PARA QUE TENGA VARIAS PÁGINAS
    showDiscount: (req,res) => {  
        // let enOferta = products.filter(producto=> producto.discount > 0);
        // res.render('ofertas', {enOferta});
        let inicio = 0;
        db.Product.findAll({
            where: {
                discount: {[db.Sequelize.Op.gt]:0}
            },
            limit: 5,
            offset: inicio
        })
        .then(enOferta => res.render('ofertas', {enOferta}))
        .catch(err => res.send(err))
    }
 }

module.exports = productosController;