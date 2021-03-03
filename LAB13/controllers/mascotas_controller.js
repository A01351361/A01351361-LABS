const Mascota = require('../models/mascota');

exports.getNuevaMascota = (request, response, next) => {
    response.render('nueva-mascota', {
        titulo: 'Nueva mascota' 
    });
};

exports.postNuevaMascota = (request, response, next) => {
    console.log(request.body.nombre_mascota);
    const nueva_mascota = new Mascota(request.body.nombre_mascota);
    nueva_mascota.save();
    response.redirect('/mascotas');
}

exports.get = (request, response, next) => {
    const mascotas = Mascota.fetchAll();
    response.render('mascotas', { 
        lista_mascotas: mascotas, 
        titulo: 'Mascotas' 
    });
};

