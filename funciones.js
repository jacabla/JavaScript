
//las funciones son fragmentos de codigo que se pueden reutilzar muchas veces, podemos hacer que hagan cosas por nosotros

//formula
//function + nombre (aqui recibe el parametro){
    //aqui van las instrucciones
//}

var nombre = prompt("Ingrese su nombre");

function saludo (nombre){ // dentro de () donde se recibe el parametro puede haber 1 o mas parametros
    document.write("Hola " + nombre +  ", bienvenido(a)");
}

saludo(nombre);
// a las funciones le podemos pasar parametros o varibles para ponerlas a trabajar...



//la funcion se puede almacenar dentro de una variable

var suma = function(num1, num2){
    return num1 + num2;
}

alert(suma(3,3));

// tambien a la funcion el usuario le puede asignar los valores

var num1 = prompt("Ingrese el primer numero a sumar");
var num2 = prompt("Ingrese el segundo numero a sumar");

var suma = function(num1, num2){
    return parseInt(num1) + parseInt(num2)
}

alert("La suma de los dos numeros digitados es " + suma(num1,num2));

// las funciones pueden almacenar condicionales dentro de si
//ejemplo

function numeroMayor(a,b){
    if (parseInt(a) > parseInt(b)){  //parseInt para convertir un string en numero int
        return parseInt(a);
    }else{
        return parseInt(b);
    }
}

var a = prompt("Ingrese el valor del primer numero");
var b = prompt("Ingrese el valor del segundo numero");

document.write(numeroMayor(a,b));
        
        // las funciones se pueden almacenar dentro de una funcion
