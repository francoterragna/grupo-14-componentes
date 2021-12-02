const fs = require ('fs');
const path = require ('path');
const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// const db = require('../database/models');
// const sequelize = db.sequelize;
// const {Op} = require('sequelize');

const adminController = {
    agregarProducto: (req,res) => {
        db.Category.findAll()
        .then(categories => res.render('agregarProducto', {categories}))
        .catch(error => res.send(error))
    },
    
    //Hay que mandarle el db.Category.findAll() a la vista para no hardcodear la selección de categorías
    // y poder hacer un forEach
    
    create:(req,res)=> {
        let imageName;
        if(req.file != undefined){
            imageName = req.file.filename;
        }else{
            imageName = 'products-default.png'
        }
        let newProduct = {
            id : products[products.length - 1].id + 1,
            ...req.body,
            image: imageName
        }
        products.push(newProduct);
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null, ' '));
        res.redirect('/administrador/agregarProducto');

        //db.Product.create({
        //  ...req.body,
        //  image: imageName
        //})
        //.then(() => res.redirect('/administrador/agregarProducto'))
        //.catch(err => res.send(err))
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