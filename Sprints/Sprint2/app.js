const express = require ('express');
const app = express();
const mainRouter = require ("./routes/mainRouter");
const productosRouter = require ('./routes/productosRouter');
const usersRouter = require ('./routes/usersRouter');
const path = require('path');
const PORT = process.env.PORT || 3030;


app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter) ;

app.use('/users', usersRouter)

app.use('/productos', productosRouter);

app.listen(PORT, () => console.log("Servidor corriendo en el puerto 3030"));