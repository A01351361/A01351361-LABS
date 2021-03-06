const db = require('../util/database');

module.exports = class Mascota {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO mascotas (nombre, imagen) VALUES (?, ?)',
            [this.nombre, this.imagen]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM mascotas');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM mascotas WHERE id=?', [id]);
    }

    static fetchByName(nombre) {
        return db.execute("SELECT * FROM `mascotas` WHERE `nombre` LIKE ? ", ['%'+nombre+'%']);
    }

}