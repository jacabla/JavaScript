// la formula para crear la condicional es if + () +{}
//if (){
    //
//}

// dentro de parentesis va la condicion
//if (condicion){
    // aqui va la instruccion, si esta se cumple se solicita que haga algo
    // y si la condicion no se cumple se usa el else
    //else{
    // entonces que otra instruccion se cumple
    //}
//}

// se declaran las variables a condicionar
var a = 10
var b = 13
// se crea la condicion
if (a>b){
    document.write("a es mayor que b")
    }else{
        document.write("a es menor que b")
    }

// ejemplo con condicion anidada

var usuario = prompt("Ingrese su usuario");

if (usuario == "Jason"){
    alert ("Usuario correcto")
    }else{
        alert("Usuario incorrecto")
    }
    var password = prompt ("Ingrese su contrasenna");
    if (password == 19){
    alert("Bienvenido " + usuario + " logeado correctamente");
    }else{
        alert("Contrasenna no valida")
    }


//ejemplo con condicines else if

var carros = ["Totoya", "Nissan", "Suzuki"]
var carroElecto = prompt("Ingrese el carro electo")

if (carroElecto == carros[1]){
    alert("Felicidades, eres el ganador de un carro modelo " + carros[1])
}else if(carroElecto == carros[0]){ // se ingresa una segunda condcional que se ejecuta si la primera condicion no se ejecuta
    alert("Felicidades, ganaste un auto marca " + carros[0])
}else{
    alert("Lo siento, pero no resultaste ganador")
} // si el la primera condicion del if no se ejecuta entra en la segunda else if y si tampoco se cumple entonces entra en el else.


// tambien se pueden hacer condicionales con operadores matematicos...

var edad = 20
var edadMinima = 10

if (edad => 20){
    document.write("El mumero es " + edad)
}else{
    document.write("El numero no es igual a " + edad)
}

// tambien se pueden agregar varias condiciones anidadas

if (edad == 20 && edadMinima >= 10){
    document.write("True")
}else{
    document.write("False")
}

// para comprobar que sea el mismo valor y del mismo tipo se una 3 iguales ===