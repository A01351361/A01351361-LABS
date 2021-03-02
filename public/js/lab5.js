
var p1 = document.getElementById("passwd");
p1.onkeypress = () => {
    console.log(p1);
}

var p2 = document.getElementById("passwd2");
p2.onkeypress = () => {
    console.log(p2);
}

function verificar(){
    let validacion = document.getElementById("validado");
    var x = document.getElementById("Verificar");
    if (p1.value == p2.value){
        validacion.innerHTML = "<p style=color:green>Tu contraseña es correcta</p>";
        x.disabled = true;
    }
    else {
        validacion.innerHTML = "<p style=color:red>Tus contraseñas no coinciden.</p>";
        x.disabled = true;
    }
    
}


var Hamburguesas = document.getElementById("Hamburguesa");
var Boneless = document.getElementById("Boneless");
var Alitas = document.getElementById("Alitas");
var Malteada = document.getElementById("Malteada");

function Pagar(){
    let suma = document.getElementById("costo");
    costo_hamburguesa = Hamburguesas.value * 15;
    costo_boneless = Boneless.value * 15;
    costo_alitas = Alitas.value * 10;
    costo_malteada = Malteada.value * 7;

    sumatotal = costo_hamburguesa + costo_boneless + costo_alitas + costo_malteada;
    iva = sumatotal * 0.16;
    total_sin_iva = sumatotal-iva;

    suma.innerHTML = "<p> El costo de los productos es de: $" + total_sin_iva + "</p>"+ "<p> El iva de 16% es de: $" + iva + "</p>" + "<p><strong>El costo total de su pedido a pagar es de: $" + sumatotal +"</strong></p>";
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    alert("Gracias por tu compra, se te cobro $" + sumatotal +" de tu tarjeta")
  }

