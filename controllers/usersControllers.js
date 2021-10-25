const fs = require ('fs');
const path = require ('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');

const { validationResult } = require('express-validator') 

const usersController = {

    login: (req,res) =>{
        res.render('login')
    } ,

    processLogin: (req,res) =>{
        // let errors = check(req);
        // let usuarioALoguearse;
        // console.log(errors);
        // if(errors.isEmpty()){ //SI NO HAY ERRORES...
        //     for(let i = 0; i < users.length ; i++){
        //         if(users[i].email == req.body.email){ // VERIFICA QUE EL EMAIL DE LA BASE DE DATOS SEA IGUAL AL EMAIL DEL FORMULARIO
        //             if(req.body.password == users[i].password){ // VERIFICACIÓN DE CONTRASEÑA CON LA DATABASE
        //                 usuarioALoguearse = usuarios[i];
        //             }
        //         }
        //     }
        //     if(usuarioALoguearse == undefined){
        //         res.render('login', {errors:[
        //             {msg:'Las credenciales son incorrectas'}
        //         ]})
        //     }
        //     req.session.usuarioLogueado = usuarioALoguearse;
        //     res.redirect('/');
        // }else{
        //     res.render('login', {errors:errors.mapped()})
        // }
    },

    showRegister:(req,res) =>{res.render('register')} ,

    saveRegister: (req,res) => {
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0 ){
            return res.render ('register', {
                errors: resultValidation.mapped(), // ENVÍA TODOS LOS ERRORES A LA VISTA PARA QUE LOS PODAMOS MOSTRAR
                oldData: req.body // PARA GUARDAR LOS DATOS QUE ESTABAN BIEN ESCRITOS EN EL FORMULARIO
            })
        }

        let imageName;
        if (req.file != undefined){
            imageName = req.file.filename;
        }else{
            imageName = 'img-default.jpg';
        }
        
        let newUser = {
            id: users[users.length-1].id + 1,
            ...req.body,
            password: bcrypt.hashSync(req.body.password,10),
            confirmPassword: bcrypt.hashSync(req.body.password,10),
            image: imageName
        };
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null ,' '));
        res.redirect('/');
    },

    list: (req,res) => {
        
        res.render('usersList', {users});
    }
}

module.exports = usersController;