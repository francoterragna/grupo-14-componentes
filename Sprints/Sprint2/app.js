const express = require ('express');
const app = express();

const mainRoutes = require('./routers/mainRoutes');

const path = require('path');

app.use(express.static('public'));

app.set('view engine','ejs');

app.get('/home', mainRoutes) ;

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
});

app.get('/producto', (req,res) => res.sendFile(path.join(__dirname, '/views/producto.html')));

app.get('/carrito', (req,res) => res.sendFile(path.join(__dirname, '/views/carrito.html')));

app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '/views/login.html'))) ;

app.listen(3030, () => console.log("Servidor corriendo en el puerto 3030"));


