
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser')
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutasMascotas = require('./routes/mascotas');
const rutasUsers = require('./routes/users');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.use(session({
    secret: 'nenemalo', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/mascotas', rutasMascotas);

app.use('/users/', rutasUsers);

app.get('/', (request, response, next) => {
    console.log('Bienvenido');
    console.log(request.session);
    response.send('<h1>¡Hola mundo!</h1>'); 
});

app.get('/git', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'git.html'));
});

app.use( (request, response, next) => {
    //response.statusCode = 404;
    response.status(404);
    response.send('Recurso no encontrado, no hay mascotas en el mundo :('); //Manda la respuesta
} );

app.listen(3000);