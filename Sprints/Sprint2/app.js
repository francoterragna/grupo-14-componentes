const express = require ('express');
const app = express();
const mainRouter = require ("./routes/mainRouter");
const productosRouter = require ('./routes/productosRouter');
const usersRouter = require ('./routes/usersRouter');

const path = require('path');

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter) ;

app.use('/users', usersRouter)

app.use('/productos', productosRouter);

app.listen(3030, () => console.log("Servidor corriendo en el puerto 3030"));