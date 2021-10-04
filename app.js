const express = require ('express');
const app = express();
const mainRouter = require ("./routes/mainRouter");
const productosRouter = require ('./routes/productosRouter');
const usuariosRouter = require ('./routes/usersRouter');
const adminRoutes = require('./routes/adminRoutes');
const path = require('path');
const PORT = process.env.PORT || 3030;
const methodOverride = require('method-override');

app.use(methodOverride("_method"));

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', mainRouter) ;

app.use('/usuarios', usuariosRouter)

app.use('/productos', productosRouter);

app.use('/administrador', adminRoutes);

app.use((req,res,next) => {
    res.status(404).render('not-found')
});

app.listen(PORT, () => console.log("Servidor corriendo en el puerto 3030"));