
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

    function Arreglo_Contador(){
        cantidadnumeros = prompt("Cuantos numeros quieres agregar al arreglo?")
        const numeros_array = []
    
        for (let i = 0; i < cantidadnumeros ; i++){
            var numeros =  NumerosAleatorios(-10, 10);
            numeros_array.push(numeros);
        }
        var contador0 = 0;
        var contadorNegativos = 0;
        var contadorPositivos = 0;
        for (let i = 0; i <= numeros_array.length; i++){
    
            if (numeros_array[i] == 0){
                contador0++;
            }
    
            else if (numeros_array[i] < 0){
                contadorNegativos++;
            }
    
            else if (numeros_array[i] > 0){
                contadorPositivos++;
            }
        }
   

        console.log(numeros_array);
        alert("0's = " + contador0 + "\nNegativos = " + contadorNegativos + "\nPositivos= " + contadorPositivos);
        document.write("Los numeros del arreglo fueron:     <br>"+ numeros_array + "</br>");
    }
    Arreglo_Contador()