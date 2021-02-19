

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
    const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
    readline.question('Que quieres agregar al archivo de texto? ', string => {
        filesystem.writeFileSync('String.txt', string);
        readline.close();
      });
    

}
stringr();


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
