const express = require ('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;



//ROUTS
const mainRouter = require ("./routes/mainRouter");
const productosRouter = require ('./routes/productosRouter');
const usuariosRouter = require ('./routes/usersRouter');
const adminRoutes = require('./routes/adminRoutes');


// Definiendo el TEMPLATE ENGINES
app.set('view engine', 'ejs');

const methodOverride = require('method-override');
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('./public'));


app.use('/', mainRouter) ;
app.use('/usuarios', usuariosRouter)
app.use('/productos', productosRouter);
app.use('/administrador', adminRoutes);


//ERROR 404
app.use((req,res,next) => {
    res.status(404).render('not-found');
    next();
});

app.listen(PORT, () => console.log("Servidor corriendo en el puerto 3030"));