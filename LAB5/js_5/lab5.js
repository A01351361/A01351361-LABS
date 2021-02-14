let password = document.getElementById("password");
password.onkeypress = () => {
    console.log(password);
}

let passwordvalido = document.getElementById("passwordvalidar");
passwordvalido.onkeypress = () => {
    console.log(passwordvalido);
}

function verificar(){
    console.log("pepe")
    if (console.log(password) == console.log(passwordvalido)){
        document.write("Tu contraseña es valida")
    }
    else{
        document.write("Tu contraseña no es valida, son diferentes.")
    }
}

//<button id = "Verificar" class = "button" onclick="verificar()"> Verificar </button>