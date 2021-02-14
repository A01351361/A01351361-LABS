//DOM: Document Object Model

const numero = prompt("Dame el número");




document.write("<h3> TABLA DE CUADRADOS Y CUBOS </h3>");
document.write("    <table style=width:100%> <tr><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr></table>")
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


    //

    document.write("<h3> Contador de Arreglos </h3>");
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
        document.write("Los numeros del arreglo fueron:     <br> ["+ numeros_array + "] </br> ");
        document.write("0's = " + contador0 + "\nNegativos = " + contadorNegativos + "\nPositivos= " + contadorPositivos);
    }
    Arreglo_Contador()

    document.write("<h3> Promedios de los arreglos </h3>");
    function Arreglos_Promedio(){
        var num = prompt("De cuantos numeros cada renglon?");
        var restador = prompt("Cuantos renglones quieres en la matriz?")
        var renglones = []
        while (restador != 0){
            var numeros_array2 = [];
    
            for (let i = 0; i < num ; i++){
                var numerost =  NumerosAleatorios(0, 10);
                numeros_array2.push(numerost);
            }
            console.log(numeros_array2)
            renglones.push(numeros_array2);
            restador=restador-1;
        }
    
        for (var i = 0; i < renglones.length; i++){
            var promedio = 0;
            var suma = 0;
            for (var j = 0; j < renglones[i].length; j++){
                var N_A = renglones[i][j];
                suma = suma + N_A;
            }
            p = i+1
            promedio = suma / num;
            document.write("<table style=width:100%> <tr> <td>","El promedio del renglon " + p + " es = " + promedio,"</td></tr></table>");
            console.log(renglones);
            console.log("El promedio del renglon " + p + " es = " + promedio + "\n");
        }
    }
    Arreglos_Promedio()

//Numero Inverso
    document.write("<h3> Numero Inverso </h3>");
    function reverseNumber(n){
        const convertir = n.toString().split('').reverse().join('')
        return Number(convertir)
      }
      
 document.write(reverseNumber(number = prompt("Introduce el número que quieres invertir: ")));

      //Calculo de vacaciones
      document.write("<h3> Calculo de vacaciones </h3>");
      function calculo(){
        var noches = prompt("Cuantas noches quieres viajar? ")
        var pasajeros = prompt("Cuantos pasajeros serian? ")
        var costo_hotel = noches * 170;
        var costo_avion = pasajeros *  315;
        var costo_viaje = costo_hotel + costo_avion;
        console.log(costo_viaje);
        document.write("El costo del viaje es de ",costo_viaje)
        }
calculo();