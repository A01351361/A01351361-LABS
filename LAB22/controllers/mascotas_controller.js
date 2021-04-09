const Mascota = require('../models/mascota');

exports.getNuevaMascota = (request, response, next) => {
    response.render('nueva-mascota', {
        titulo: 'Nueva mascota',
       // csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postNuevaMascota = (request, response, next) => {
    console.log("Creando nuevo mascota...");
    console.log(request.body.nombre_mascota);
    
    const image = request.file;
    console.log(image);

    if(!image) {
        console.error('Error al subir la imagen');
        return response.status(422).redirect('/');
    }

    const nueva_mascota = new Mascota(request.body.nombre_mascota, image.filename);
    nueva_mascota.save()
        .then(() => {
            response.setHeader('Set-Cookie', ['ultima_mascota='+nueva_mascota.nombre+'; HttpOnly']);
            response.redirect('/mascotas');
        }).catch(err => console.log(err));

}



exports.getMascota = (request, response, next) => {
    const id = request.params.mascota_id;
    Mascota.fetchOne(id)
        .then(([rows, fieldData]) => {
            response.render('mascotas', { 
                lista_mascotas: rows, 
                titulo: 'Mascotas',
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postBuscar = (request, response, next) => {
    console.log(request.body);
    console.log(request.body.valor_busqueda);
    const name = request.body.valor_busqueda;
    Mascota.fetchByName(name)
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.status(200).json(rows);
        })
        .catch(err => {
            console.log(err);
        });
    
};

exports.get = (request, response, next) => {
    console.log('Cookie: ' + request.get('Cookie'));
    
    //Con cookie-parser
    console.log(request.cookies);
    console.log(request.cookies.ultima_mascota);

    Mascota.fetchAll()
        .then(([rows, fieldData]) => {
            response.render('mascotas', { 
                lista_mascotas: rows, 
                titulo: 'Mascotas',
                isLoggedIn: request.session.isLoggedIn === true ? true : false
            });
        })
        .catch(err => {
            console.log(err);
        });
};

