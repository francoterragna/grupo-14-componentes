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
        .then(categories => res.render('agregarProducto', {categories}))
        .catch(error => res.send(error))
    },
    
    create:(req,res)=> {
        let imageName = [];
        if(req.file != undefined){
            imageName.push(req.file.filename);
        }else{
            return res.render('agregarProducto', {
                errors:{
                    imagenProductoNuevo:{
                        msg: 'No se seleccionó ninguna foto'
                    }
                }
            })
        }
        // db.Product.create({
        //  name: req.body.name,
        //  description: req.body.description,
        //  category: req.body.category,
        //  discount: req.body.discount,
        //  price: req.body.price
        // })
        // .then(()=>{
        //     db.Image.create({
        //         name: 
        //     })
        // })
        
        // .then(() => res.redirect('/administrador/agregarProducto'))
        // .catch(err => res.send(err))
    },
    
    modificarProducto: (req,res) =>{
        let id = req.params.id;
		let productToEdit = products.find(product => product.id == id); 
        res.render('modificarProducto', {productToEdit})
    }, 

    enviarCambios: (req,res) =>{
        let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);
        let newImage;
        if(req.file == undefined){
            newImage = productToEdit.image
        }else{
           newImage = req.file.filename
        }
        productToEdit ={
            id: productToEdit.id,
            ...req.body,
            image : newImage
        };

        let newProduct = products.map(producto => {
			if (producto.id == productToEdit.id) {
				return producto = {...productToEdit};
			}
			return producto;
		});
        fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, ' '));
		res.redirect('/');
    },

    delete: (req,res) => {
      let  id = req.params.id;
      let finalProducts =   products.filter(product => product.id != id)

      fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '))
      res.redirect('/')
    }
};

module.exports = adminController;