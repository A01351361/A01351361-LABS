


 const express = require('express');
 const bodyParser = require('body-parser');
 const path = require('path');
 const app = express();
 
 const mascotas = ["Perro"];

  
  //app.set('view engine', 'ejs');
  //app.set('views', 'views');

  //Middleware
 app.use(bodyParser.urlencoded({extended: false}));
 
 app.use(express.static(path.join(__dirname, 'public')));

  app.use((request, response, next) => {
      console.log('Middleware!');
      next(); //Le permite a la petición avanzar hacia el siguiente middleware
  });
  
 app.get('/mascotas/nueva-mascota', (request, response, next) => {
     response.send('<h1>Nueva Mascota</h1><body><h1>Agrega una mascota</h1><form action="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar mascota"></form>'); 
 });
 
 app.post('/mascotas/nueva-mascota', (request, response, next) => {
    console.log(request.body.nombre);
    mascotas.push(request.body.nombre);
    response.redirect('/mascotas');
});

app.use('/mascotas', (request, response, next) => {
       let html = '<h1>Mascotas</h1><ul>';
        for (let mascota of mascotas) {
            html = html + '<li>' + mascota + '</li>';
        }
        html = html + '</ul>'
        response.send(html); 
     });
app.get('/git',(request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'git.html'));
});



/*app.use('/mascotas', (request, response, next) => {
    response.send('<h1>Mascotas</h1>'); 
});
 app.get('/mascotas/nueva-mascota', (request, response, next) => {
     response.send('<h1>Mascota guardada</h1>'); 
 });*/
 
 app.get('/', (request, response, next) => {
    console.log('Bienvenido');
     response.send('<h1>¡Hola mundo!</h1>'); 
 });
 
  app.use( (request, response, next) => {
      //response.statusCode = 404;
      response.status(404).send('Recurso no encontrado'); //Manda la respuesta
  } );
  
  app.listen(3000);