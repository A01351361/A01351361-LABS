const Mascota = require('../models/mascota');

exports.getNuevaMascota = (request, response, next) => {
    response.render('nueva-mascota', {
        titulo: 'Nueva mascota',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNuevaMascota = (request, response, next) => {
    console.log(request.body.nombre_mascota);
    const nueva_mascota = new Mascota(request.body.nombre_mascota, request.body.imagen_mascota);
    nueva_mascota.save();
    response.setHeader('Set-Cookie', ['ultima_mascota='+nueva_mascota.nombre+'; HttpOnly']);
    response.redirect('/mascotas');
}

exports.get = (request, response, next) => {
    const mascotas = Mascota.fetchAll();
    console.log('Cookie: ' + request.get('Cookie'));
    console.log(request.cookies);
    console.log(request.cookies.ultima_mascota);

    response.render('mascotas', { 
        lista_mascotas: mascotas, 
        titulo: 'Mascotas',
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

