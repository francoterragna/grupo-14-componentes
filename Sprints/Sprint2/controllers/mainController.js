const controlador = {
    home: (req,res) => {
        return res.render('home')
    },
    register: (req,res) => {
        return res.render('register')
    },
    login: (req,res) => {
        return res.render('login')
    },
    carrito: (req,res) => {
        return res.render('carrito')
    },
    producto: (req,res) => {
        return res.render('producto')
    }
}

module.exports = controlador;