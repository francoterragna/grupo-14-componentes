const fs = require ('fs');
const path = require ('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator') 

const usersController = {

    login: (req,res) => res.render('login'),

    showRegister:(req,res) => res.render('register'),

    saveRegister: (req,res) => {


        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0 ){
            return res.render ('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
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
            image: imageName
        };

        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null ,' '));
        res.redirect('/');
    },

    list: (req,res) => {
        
        res.render('usersList', { users});
    }
}

module.exports = usersController;