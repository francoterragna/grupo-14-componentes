const fs = require ('fs');
const path = require ('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const adminController = {
    agregarProducto: (req,res) => {

        db.Category.findAll()
        .then(categories => {
            db.Size.findAll()
            .then(sizes => res.render('agregarProducto', {categories, sizes}))
        } )
        .catch(error => res.send(error))
    },
    
    create:(req,res)=> {
        db.Product.create({
         name: req.body.name,
         description: req.body.description,
         discount: req.body.discount,
         category_id: req.body.category, 
         price: req.body.price,
         stock: req.body.stock
        })
        .then((productoCreado)=>{
            let imageName;
            if(req.files != undefined){
                imageName = req.files;
            }
            
            imageName.forEach(image => {
                db.Image.create({
                  name: image.filename,
                  product_id: productoCreado.id 
                })
            });
        })
        
        .then(() => res.redirect('/administrador/agregarProducto'))
        .catch(err => res.send(err))
    },
    
    modificarProducto: (req,res) =>{
        db.Product.findByPk(req.params.id)
        .then(productToEdit => {
            db.Category.findAll()
            .then( categories => {
                db.Size.findAll()
                .then(sizes => {
                    db.Image.findAll()
                    .then(image =>{ res.render('modificarProducto', {productToEdit,categories,sizes,image})})
            })}
            )
           
        } )
        .catch(error => res.send(error))
    }, 

    enviarCambios: (req,res) =>{
        let id = req.params.id;
        db.Product.update({
            name: req.body.name,
            description: req.body.description,
            discount: req.body.discount,
            category_id: req.body.category, 
            price: req.body.price,
            stock: req.body.stock
        },{
        where: {id:  id}
        })
        .then(producto => {
            let archivos = req.files;
                if(archivos.length > 0){
                    
                    for(let i=0; i<archivos.length; i++){
                        db.Image.upsert({ 
                            name: archivos[i].filename
                        },
                        {
                            where: {product_id: id}
                        })
                        .then((imagen) => res.send({producto,imagen}))
                    }
                }
        })
            
            .catch(() => res.send('Se ha producido un error, intente de nuevo más tarde'))
        
        
		// let productToEdit = products.find(product => product.id == id);
        // let newImage;
        // if(req.file == undefined){
        //     newImage = productToEdit.image
        // }else{
        //    newImage = req.file.filename
        // }
        // productToEdit ={
        //     id: productToEdit.id,
        //     ...req.body,
        //     image : newImage
        // };

        // let newProduct = products.map(producto => {
		// 	if (producto.id == productToEdit.id) {
		// 		return producto = {...productToEdit};
		// 	}
		// 	return producto;
		// });
        // fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, ' '));
		// res.redirect('/');
    },

    delete: (req,res) => {

        db.Image.destroy(
            {
                where: {product_id: req.params.id},
                force: true
            }
        )
        .then(() => {
            db.Product.destroy(
            {
                where: {id: req.params.id},
                force: true
            })
            }       
            )
            .then(() => {return res.send('Se eliminó el producto')})
            .catch(err => res.send(err))
        }
    }


module.exports = adminController;