/*const express = require('express');

const router = express.Router();
const path = require('path');

const mascotas = ["Perro"];

router.get('/nueva-mascota', (request, response, next) => {
    response.send('<h1>Nueva Mascota</h1><body><h1>Agrega un mascota</h1><form action="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar mascota"></form>'); 
});

router.post('/nueva-mascota', (request, response, next) => {
    console.log(request.body.nombre);
    personajes.push(request.body.nombre);
    response.redirect('/mascotas');
});

router.use('/', (request, response, next) => {
    let html = '<h1>Mascotas</h1><ul>';
    for (let mascota of mascotas) {
        html = html + '<li>' + mascota + '</li>';
    }
    html = html + '</ul>'
    response.send(html); 
});

module.exports = router;*/