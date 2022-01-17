const path = require('path');
const { body } = require('express-validator');

const validationMod = [
    body('name').notEmpty().withMessage('El campo de nombre no puede estar vacío'),
    body('description').notEmpty().isLength({min:20}).withMessage('El campo no puede quedar vacío y debe contener al menos 20 caracteres'),
    body('price').notEmpty().withMessage('Debes asignarle un precio al producto'),
    body('imagenProductoModificado').custom((value, { req }) => {
        let files = req.files;
        let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
        console.log(files)
        if (files.length == 0) {
           throw new Error ('Tienes que subir una imagen');
         } else {
           let fileExtension = path.extname(files[0].originalname);
          //  console.log(fileExtension)
          if (!acceptedExtensions.includes(fileExtension)) {
              throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }                          
        return true;
     })
]

module.exports = validationMod;