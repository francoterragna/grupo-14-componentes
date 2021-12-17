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
            console.log(req.files);
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
                    .then(image =>{ res.render('modificarProducto', {productToEdit,categories, sizes,image})})
                   
            })}
            )
           
        } )
        .catch(error => res.send(error))

        // let id = req.params.id;
		// let productToEdit = products.find(product => product.id == id); 
        // res.render('modificarProducto', {productToEdit})
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
        let idProducto = db.Image.product_id
        db.Product.destroy(
            {
                where: {id: req.params.id}, force: true
            })
            .then(()=> {
                if(idProducto === req.params.id){
                db.Image.destroy({
                    where: {product_id: req.params.id  }, force: true
                })
            }
            })
            .then(() => {return res.redirect('/')})
            .catch(err => res.send(err))
        
    //   let  id = req.params.id;
    //   let finalProducts =   products.filter(product => product.id != id)

    //   fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '))
    //   res.redirect('/')
    }
};

module.exports = adminController;