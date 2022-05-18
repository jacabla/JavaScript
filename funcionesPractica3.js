


function autenticar(){
    var usuario = document.getElementById("valor1").value;

    var password = document.getElementById("valor2").value;

    if (usuario == "jacabla" && password == "Tcby7260"){
        alert("Hola " + usuario + " Bienvenido");
    }else{
        alert("Nombre de usuario o contrasena invalido.");
    }
}

document.getElementById("ingresar").onclick = autenticar;


const miInput = document.getElementById('valor2');

miInput.addEventListener('keyup', function (event) {
  if (event.getModifierState('CapsLock')) {
    alert("Bloq Mayús esta activado");
  }
});