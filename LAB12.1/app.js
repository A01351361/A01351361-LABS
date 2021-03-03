
 const express = require('express');
 const app = express();
  
 const bodyParser = require('body-parser');
 const path = require('path');

 
 const rutasMascotas = require('../routes/mascotas.js');

  
  //app.set('view engine', 'ejs');
  //app.set('views', 'views');

  //Middleware
 app.use(bodyParser.urlencoded({extended: false}));


  app.use((request, response, next) => {
      console.log('Middleware!');
      next(); //Le permite a la petición avanzar hacia el siguiente middleware
  });
  app.use('/mascotas.js', rutasMascotas);

     app.use(express.static(path.join(__dirname, 'public')));
     
    app.get('/git',(request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'git.html'));
});
 



/*app.use('/mascotas', (request, response, next) => {
    response.send('<h1>Mascotas</h1>'); 
});
 app.get('/mascotas/nueva-mascota', (request, response, next) => {
     response.send('<h1>Mascota guardada</h1>'); 
 });*/
 

 
  app.use( (request, response, next) => {
      //response.statusCode = 404;
      response.status(404).send('Recurso no encontrado'); //Manda la respuesta
  } );
  
  app.listen(3000);