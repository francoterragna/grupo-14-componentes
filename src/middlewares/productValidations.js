const path = require('path');
const { body } = require('express-validator');


const productValidations = [
  body('name').notEmpty().withMessage('El campo no puede estar vacío').bail().isLength({min:5}).withMessage('El nombre debe tener mínimo 5 caracteres'),
  body('description').notEmpty().withMessage('El campo no puede estar vacío').bail().isLength({min:20}).withMessage('La descripción debe tener al menos 20 caracteres'),
  body('price').notEmpty().withMessage('El producto debe contener un precio'),
  body('imagenProductoNuevo').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
    if (!file) {
       throw new Error ('Tienes que subir una imagen');
     } else {
       let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
    }      
    return true;
    })
];

    module.exports = productValidations;