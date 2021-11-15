const path = require('path');
const { body } = require('express-validator');


const validations = [
    body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debes escribir un correo electrónico válido')
    ,
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('confirmPassword').notEmpty().withMessage('Tienes que escribir una contraseña').custom((value, {req}) => {
       if (value !== req.body.password) {
             throw new Error('Las contraseñas deben ser iguales');
    }
        return true;
 })
    ];

    module.exports = validations