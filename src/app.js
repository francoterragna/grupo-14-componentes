const express = require ('express');
const app = express();
const path = require('path');
const session = require ('express-session');
const PORT = process.env.PORT || 3030;

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


//ROUTS
const mainRouter = require("./routes/mainRouter");
const productosRouter = require ('./routes/productosRouter');
const usuariosRouter = require ('./routes/usersRouter');
const adminRoutes = require('./routes/adminRoutes');
const apiProductsRouter = require('./routes/api/apiProductsRouter');
const apiUsersRouter = require('./routes/api/apiUsersRouter');


//DEFINIENDO COOKIE
const cookies = require('cookie-parser');

// Definiendo el TEMPLATE ENGINES
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//CONFIGURACIONES PARA PUT Y DELETE
const methodOverride = require('method-override');
app.use(methodOverride("_method"));

//PARA QUE FUNCIONE EL PROCESO POR POST
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//DEFINIENDO ARCHIVOS ESTÁTICOS
app.use(express.static('./public'));

//El método secret es para que sirva sólo en nuestra página.
app.use(session({
    secret:'Secreto',
    resave: false,
    saveUninitialized: false
})); 

app.use(cookies());
app.use(userLoggedMiddleware);



app.use('/', mainRouter) ;
app.use('/usuarios', usuariosRouter)
app.use('/productos', productosRouter);
app.use('/administrador', adminRoutes);
app.use('/api/productos', apiProductsRouter);
app.use('/api/users', apiUsersRouter);


//ERROR 404
app.use((req,res,next) => {
    res.status(404).render('not-found');
    next();
});

app.listen(PORT, () => console.log("Servidor corriendo en el puerto 3030"));