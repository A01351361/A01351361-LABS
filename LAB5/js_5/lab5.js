
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
    if (p1.value == p2.value){
        validacion.innerHTML = "<p style=color:green>Tu contraseña es correcta</p>";

    }
    else {
        validacion.innerHTML = "<p style=color:red>Tus contraseñas no coinciden.</p>";
    }
    
}


//<button id = "Verificar" class = "button" onclick="verificar()"> Verificar </button>