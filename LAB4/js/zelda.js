
const numero = prompt("Dame el número");





// TABLA DE CUADRADOS Y CUBOS
for (var i = 1; i <= numero; i++){
    document.write("<table style=width:100%> <tr> ","<td>",i,"</td>" );
    
    let cuadrado = Math.pow(i, 2);
    document.write("<td>",cuadrado,"</td>");

    let cubo = Math.pow(i,3);
    document.write("<td>",cubo," </td> </tr></table>");
}

//NUMEROS ALEATORIOS CON SUMA

function NumerosAleatorios(min, max) {
    return Math.round(Math.random() * (max - min) + min);
 }
    var suma1 = NumerosAleatorios(1, 50);
    var suma2 = NumerosAleatorios(1, 50);
    var suma = suma1 + suma2;

    var start = new Date().getTime();
    const result = prompt("Cual es la suma de: " + suma1 + " +" + suma2 + " ?");
    var end = new Date().getTime();
    var time = (end - start)/1000;

    if (result == suma){
        alert("La respuesta es correcta! tardaste " + time + " segundos");
    }
    else{
        alert("La respuesta es incorrecta!, el resultado es " + suma + " tardaste " + time + "Seg");
    }
