const fs = require('fs');
const path = require ('path');

const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');


const productosController = {
    detalle: (req,res) =>{
        let id= req.params.id;
        db.Product.findByPk(id)
        .then((product) =>{
            db.Image.findAll({
                where: {product_id: id}
            })
            .then(img => res.render('detalleProducto', {product, img}))
        })
        .catch(err => res.send(err))
    },

    carrito: (req,res) => res.render('carrito'),

     showProduct: (req,res) =>{
        db.Product.findAll({
            where: {
                category_id: req.params.category
                
            }})
        .then((productos)=> {
            db.Image.findAll()
            .then((img) => res.render('productSelect', {productos, img}))
            })
        .catch(err => res.send(err));

    },

    //HAY QUE APLICAR EL OFFSET PARA QUE TENGA VARIAS PÁGINAS
    showDiscount: (req,res) => {
        let inicio = 0;
        db.Product.findAll({
            where: {
                discount: {[db.Sequelize.Op.gt]:0}
            },
            limit: 5,
            offset: inicio
        })
        .then((enOferta) =>{
            db.Image.findAll()
            .then((img) => res.render('ofertas', {enOferta, img}))
        } )
        .catch(err => res.send(err))
    }
 }

module.exports = productosController;