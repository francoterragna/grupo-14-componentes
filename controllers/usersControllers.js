const fs = require ('fs');
const path = require ('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {

    login: (req,res) => res.render('login'),

    showRegister:(req,res) => res.render('register'),

    saveRegister: (req,res) => {
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
        let users = [
            {id: 1, name: 'Franco'},
            {id: 2, name: 'Ulises'},
            {id: 3, name: 'Santiago'},
            {id: 4, name: 'Darío'},
        ];
        res.render('usersList', {'users': users});
    }
}

module.exports = usersController;