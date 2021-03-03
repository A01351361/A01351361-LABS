const mascotas = ["Perro", "Gato"];

module.exports = class Mascota {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre) {
        this.nombre = nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        mascotas.push(this.nombre);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return mascotas;
    }

}