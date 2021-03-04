const mascotas = [{nombre: "´Chihuahueño", imagen: "https://significadodenombres.wiki/wp-content/uploads/2017/04/chihuahua_opt.jpg"},{nombre: "Pug", imagen: "https://i.pinimg.com/236x/f3/f5/68/f3f5680ed1ce110eb8562fca60ff6092--cute-pug-puppies-baby-puppies.jpg"}];

module.exports = class Mascota {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        mascotas.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return mascotas;
    }

}