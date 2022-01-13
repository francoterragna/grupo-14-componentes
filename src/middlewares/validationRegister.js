const path = require('path');
const { body } = require('express-validator');

  const validations = [
      body('firstName').notEmpty().withMessage('Tienes que escribir un nombre').bail().isLength({min:2, max:50}).withMessage('El nombre debe contener entre 2 y 50 carácteres'),
      body('lastName').notEmpty().withMessage('Tienes que escribir un apellido').bail().isLength({min:2, max:50}).withMessage('El apellido debe contener entre 2 y 50 carácteres'),
      body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debes escribir un correo electrónico válido')
      ,
      body('password').notEmpty().withMessage('Tienes que escribir una contraseña').bail().isLength({min:8, max:20}).withMessage('La contraseña debe contener entre 8 y 20 carácteres'),
      body('confirmPassword').notEmpty().withMessage('Tienes que escribir una contraseña').custom((value, {req}) => {
         if (value !== req.body.password) {
               throw new Error('Las contraseñas deben ser iguales');
      }
          return true;
   }),
   body('imgProfile').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
      console.log(file)
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
 

    module.exports = validations;