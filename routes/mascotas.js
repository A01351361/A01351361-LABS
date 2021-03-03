const express = require('express');

const router = express.Router();
const path = require('path');

const mascotas = ["Perro"];

router.get('/mascotas/nueva-mascota', (request, response, next) => {
    response.send('<h1>Nueva Mascota</h1><body><h1>Agrega una mascota</h1><form action="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar mascota"></form>'); 
});

router.post('/mascotas/nueva-mascota', (request, response, next) => {
   console.log(request.body.nombre);
   mascotas.push(request.body.nombre);
   response.redirect('/mascotas');
});

router.use('/mascotas', (request, response, next) => {
      let html = '<h1>Mascotas</h1><ul>';
       for (let mascota of mascotas) {
           html = html + '<li>' + mascota + '</li>';
       }
       html = html + '</ul>'
       response.send(html); 
    });
    router.get('/', (request, response, next) => {
       console.log('Bienvenido');
        response.send('<h1>¡Hola mundo!</h1>'); 
    });

module.exports = router;

/*app.get('/mascotas/nueva-mascota', (request, response, next) => {
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
    app.get('/', (request, response, next) => {
       console.log('Bienvenido');
        response.send('<h1>¡Hola mundo!</h1>'); 
    });*/

