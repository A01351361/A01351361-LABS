

//Imprimir el arreglo en orden con código asíncrono
function arreglo(){
 const arreglo = [5000, 60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];
 suma = 0;
 cont =0;

 for (let item of arreglo) {
        suma = suma + item;
        cont ++;
    ;
}
console.log("El promedio del arreglo definido es de " + suma/cont);
}
//Llamamos la función del promedio del arreglo y se imprime en la consola.
arreglo();

//Funcion string en archivo txt
 //fs: filesystem

  
function stringr(){
    const filesystem = require('fs');
    const prompt = require('prompt-sync')();
    var string = prompt('Que quieres agregar al archivo de texto? ');
    filesystem.writeFileSync('String.txt', string);
      
    

}
stringr();

function calculo(){
    const prompt = require('prompt-sync')();

    const noches = prompt('Cuantas noches quieres viajar? ');
    const pasajeros = prompt('Cuantos pasajeros van a viajar? ');
    var costo_hotel = noches * 170;

    var costo_avion = pasajeros *315;
    var costo_viaje = costo_hotel + costo_avion;
    console.log("El costo del viaje es de ",costo_viaje," pesos mexicanos")
    }
    calculo()


const http = require('http');

const server = http.createServer( (request, response) => {
    console.log("hola desde el servidor");
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<html>");
    response.write("<head><title>Servidor node</title></head>");
    response.write("<body><h1>Hola desde el servidor</h1></body>");
    response.write("</html>");
    response.end();
});

server.listen(3000);
