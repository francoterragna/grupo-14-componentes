const path = require('path');
const { body } = require('express-validator');


const productValidations = [
  body('name').notEmpty().withMessage('El campo no puede estar vacío').bail().isLength({min:5}).withMessage('El nombre debe tener mínimo 5 carácteres'),
  body('description').notEmpty().withMessage('El campo no puede estar vacío').bail().isLength({min:20}),
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
    }                          I
    
    return true;
    
 })
]
 ;

    module.exports = productValidations