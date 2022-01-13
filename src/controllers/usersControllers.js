const bcryptjs = require('bcryptjs');

const User = require ('../database/models/User');// Todas las funcionalidades de User.js se van a hacer acá en el controller

const { validationResult } = require('express-validator');

const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');
const req = require('express/lib/request');


const usersController = {
    
    login: (req,res) =>{
        
        return res.render('login')
    },

    processLogin: (req,res) =>{
        db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then((userToLogin) => {
            if(userToLogin){
                let passIsOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
                  if(passIsOk){
                    //   delete userToLogin.password;
                      req.session.userLogged = userToLogin;
                      if(req.body.recordarme){
                          res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
                      }
                      return res.redirect('/usuarios/profile')
                  };
                  return res.render('login', {
                      errors:{
                          email:{
                              msg: 'Las credenciales son incorrectas'
                          }
                      }
                  })
              };
      
              return res.render('login', {
                  errors:{
                      email:{
                          msg: 'No se encuentra este email en nuestra base de datos'
                      }
                  }
              });
            }).catch(err => res.send(err))
    },

    showRegister:(req,res) =>{
        return res.render('register')
    },

    saveRegister: (req,res) => {
        const resultValidation = validationResult(req);
        console.log(req.file);
        if(resultValidation.errors.length > 0 ){
            return res.render ('register', {
                errors: resultValidation.mapped(), // ENVÍA TODOS LOS ERRORES A LA VISTA PARA QUE LOS PODAMOS MOSTRAR
                oldData: req.body // PARA GUARDAR LOS DATOS QUE ESTABAN BIEN ESCRITOS EN EL FORMULARIO
            })
        }
        db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(userInDB => { 
           
            if(userInDB){

            return res.render ('register', {
                errors: {
                    email:{
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            })
        }
        else{
            let imageName;
            if (req.file != undefined){
                    imageName = req.file.filename;
            }
            else{
                    imageName = 'img-default.jpg';
            }
            db.User.create({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                category: req.body.category,
                img: imageName,
                password: bcryptjs.hashSync(req.body.password,10) 
            }).then(()=> res.redirect('/usuarios/login'))
        }
    
    })
    .catch(errors => res.send(errors))
    
    },

    profile: (req,res) => {
        return res.render('profile', {
            user: req.session.userLogged
        })
    },
    editarPerfil: (req,res) => {
        let id = req.params.id;
        db.User.findByPk(id)
        .then(() => {
          res.render('editarPerfil',{
              user:req.session.userLogged
          })
           
        } )
        .catch(error => res.send(error))
    },
    actualizarUsuario: (req,res) => {
        let id = req.params.id;
        if (req.file != undefined){
                imageName = req.file.filename;
        }
        else{
                imageName = 'img-default.jpg';
            };
            db.User.findByPk(id)
            .then(user => {
                let passwordOk = bcryptjs.compareSync(req.body.confirmPassword, user.password);
                if(passwordOk){
                var newPassword = req.body.newPassword
                }
                db.User.update({
                    first_name: req.body.firstName,
                    last_name: req.body.lastName,
                    img: imageName,
                    password: bcryptjs.hashSync(newPassword,10)
                   },{
                        where:{
                            id: req.params.id
                        }
                   })
                   .then(res.redirect('/usuarios/profile'))
                   .catch(err => res.send('Ocurrió un error'))
            })
    },
    logout: (req,res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();  
        return res.redirect('/');

    }
}

module.exports = usersController;

