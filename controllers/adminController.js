const fs = require ('fs');
const path = require ('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const adminController = {
    agregarProducto: (req,res) => res.render('agregarProducto'),
    
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
        res.redirect('/administrador/agregarProducto')
    }        ,
    
    
    modificarProducto: (req,res) => res.render('modificarProducto'),

};

module.exports = adminController;