const bcryptjs = require('bcryptjs');

const User = require ('../database/models/User');// Todas las funcionalidades de User.js se van a hacer acá en el controller

const { validationResult } = require('express-validator');

const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const usersController = {
    
    login: (req,res) =>{
        
        return res.render('login')
    },

    processLogin: (req,res) =>{
        let userToLogin = db.User.findOne({
            where:{email: req.body.email}
        })
            .then(() => {
            //   let userToLogin = user
              if(userToLogin){
                  let passIsOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
                  if(passIsOk){
                      delete userToLogin.password;
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
            })
            console.log(userToLogin);
        //User.findByField('email',req.body.email);



    },
    showRegister:(req,res) =>{
        // res.cookie('testing', 'Hola!', {maxAge: 1000* 30});
        return res.render('register')
    },

  
    
    saveRegister: (req,res) => {
        const resultValidation = validationResult(req);
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
        }else{
            let imageName;
            if (req.file != undefined){
                    imageName = req.file.filename;
            }else{
                    imageName = 'img-default.jpg';
            }
            db.User.create({
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                email: req.body.email,
                category: req.body.category,
                img: imageName,
                password: req.body.password
            }).then(()=> res.redirect('/login'))
        }

    
    })
    .catch(errors => res.send(errors))
       
    },
        
    
        
        
        // if(userInDB){
            //     return res.render ('register', {
        //         errors: {
            //             email:{
        //                 msg: 'Este email ya está registrado'
        //             }
        //         },
        //         oldData: req.body
        //     });
        // }
        
        // let imageName;
        // if (req.file != undefined){
        //         imageName = req.file.filename;
        // }else{
        //         imageName = 'img-default.jpg';
        // }
        
        // let userToCreate = {
            //     ...req.body,
            //     password: bcryptjs.hashSync(req.body.password,10),
            //     image: imageName,
            // }
        
            // let userCreated = User.create(userToCreate);
            // return res.redirect('/')
        
            
            
    list: (req,res) => {
        
        res.render('usersList', {users});
    },

    profile: (req,res) => {
        return res.render('profile', {
            user: req.session.userLogged
        })
    },
    logout: (req,res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();  
        return res.redirect('/');
    }
}

module.exports = usersController;