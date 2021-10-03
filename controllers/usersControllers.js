const usersController = {
    login: (req,res) => res.render('login'),
    register:(req,res) => res.render('register'),
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