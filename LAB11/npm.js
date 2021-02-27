


 const express = require('express');
 const bodyParser = require('body-parser');
  const app = express();
  
  //Middleware
 app.use(bodyParser.urlencoded({extended: false}));
 
  app.use((request, response, next) => {
      console.log('Middleware!');
      next(); //Le permite a la petición avanzar hacia el siguiente middleware
  });
  
 app.get('/personajes/nuevo-personaje', (request, response, next) => {
     response.send('<h1>Nuevo Personaje</h1><body><h1>Agrega un personaje</h1><form action="nuevo-personaje" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar personaje"></form>'); 
 });
 
 app.post('/personajes/nuevo-personaje', (request, response, next) => {
    console.log(request.body.nombre);
     response.send('<h1>Prsonaje guardado</h1>'); 
 });
 
 app.use('/personajes', (request, response, next) => {
     response.send('<h1>Personajes</h1>'); 
 });
 
 app.use('/', (request, response, next) => {
     response.send('<h1>¡Hola mundo!</h1>'); 
 });
 
  app.use( (request, response, next) => {
      console.log('¡Hola, mundo!');
      response.send('¡Hola mundo!'); //Manda la respuesta
  } );
  
  app.listen(3000);