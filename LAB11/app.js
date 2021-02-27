


 const express = require('express');
 const bodyParser = require('body-parser');
 const path = require('path');


  const app = express();
  
  app.set('view engine', 'ejs');
app.set('views', 'views');

  //Middleware
 app.use(bodyParser.urlencoded({extended: false}));
 
  app.use((request, response, next) => {
      console.log('Middleware!');
      next(); //Le permite a la petición avanzar hacia el siguiente middleware
  });
  
 app.get('/mascotas/nueva-mascota', (request, response, next) => {
     response.send('<h1>Nueva Mascota</h1><body><h1>Agrega una mascota</h1><form action="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar mascota"></form>'); 
 });
 

app.get('/git',(request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'git.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

 app.post('/mascotas/nueva-mascota', (request, response, next) => {
    console.log(request.body.nombre);
     response.send('<h1>Mascota guardada</h1>'); 
 });
 
 app.use('/mascotas', (request, response, next) => {
     response.send('<h1>Mascotas</h1>'); 
 });
 
 app.use('/', (request, response, next) => {
     response.send('<h1>¡Hola mundo!</h1>'); 
 });
 
  app.use( (request, response, next) => {
      console.log('¡Hola, mundo!');
      response.send('¡Hola mundo!'); //Manda la respuesta
  } );
  
  app.listen(3000);