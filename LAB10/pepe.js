//fs: filesystem
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');


const http = require('http');
const mascotas = ["Perro"];
 const server = http.createServer( (request, response) => {
     console.log(request.url);
 

     
     if (request.url === "/mascotas") {
         response.setHeader('Content-Type', 'text/html');
         response.write("<html>");
         response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
         response.write("<body><h1>Mascotas</h1></body>");
         
         if (mascotas.length == 0) {
             response.write("<h2>No tengo mascotas por el momento</h2>");
         } else {
             response.write("<ul>");
             for (let mascota of mascotas) {
                 response.write("<li>");
                 response.write(mascota);
                 response.write("</li>");
             }
             response.write("</ul>");  
         }
         
         response.write("</html>");
         response.end();
         
     } else if (request.url === "/nueva-mascota" && request.method === "GET") {
         response.setHeader('Content-Type', 'text/html');
         response.write("<html>");
         response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
         response.write("<body><h1>Agrega una mascota</h1>");
         response.write('<form action="nueva-mascota" method="POST"><input type="text" name="nombre"><input type="submit" value="Guardar mascota"></form>');
         response.write("</body>");
         response.write("</html>");
         response.end();
     } else if (request.url === "/nueva-mascota" && request.method === "POST") {
         const datos = [];
         request.on('data', (dato) => {
             console.log(dato);
             datos.push(dato);
         });
         return request.on('end', () => {
             const datos_completos = Buffer.concat(datos).toString();
             console.log(datos_completos);
             const nueva_mascota = datos_completos.split('=')[1];
             mascotas.push(nueva_mascota);
             console.log(nueva_mascota);
             response.statusCode = 302;
             response.setHeader('Location', '/mascotas');
             return response.end();
         });
 
     } else if (request.url === "/") {
         response.setHeader('Content-Type', 'text/html');
         response.write("<html>");
         response.write('<head><meta charset="UTF-8"><title>Servidor node</title></head>');
         response.write("<body><h1>Hola desde el servidor</h1></body>");
         response.write("</html>");
         return response.end();
     } else {
         response.statusCode = 404;
         response.setHeader('Content-Type', 'text/html');
         response.write("<html>");
         response.write('<head><meta charset="UTF-8"><title>Page not found</title></head>');
         response.write("<body><h1>Page not found, Link is lost in time.</h1></body>");
         response.write("</html>");
        return response.end();
     }
 
     
 });
 server.listen(3000);