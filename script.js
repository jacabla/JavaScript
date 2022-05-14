

var nombres = prompt("Ingresa tu nombre"); //prompt se usa para pedir al usuario que ingrese datos

var edad = prompt("Ingresa tu edad");
 
 //document.write();  se usa para imprimir a pantalla...

document.write( nombres  + " " + edad); //se usa para mostrar datos en pantalla, para concatenar se puede agregar comillas +, las comillas dan espacio entre cada variable al imprimir

// tipos de datos

//==>
// Numeric (int o float)
var edad = 19; // numero entero, puede ser float tambien, en JS no hay que especificar cual de los dos es... se pueden agregar operaciones matematicas

//==>
// String - cadena de texto - se puede concatenar cadenas de texto
var nombre = "Jason";
var apellido = "Castro";
var texto = "Para agregar comillas en strings se hace asi \"Hola\" " // para agregar comillas en un string se hace asi.
document.write(nombre + " " + apellido);
document.write(texto);

//==>
// array (AKA vectores) - arreglo - un arreglo nos permite agregar muchas cosas
var amigos = ["Rigo", "Beto", "Fabis", "Pipe"]; // se puede acceder a cualquiera de los arreglos con ciclos
document.write(amigos[2]); //asi se accede al nombre de Fabis, los arrays empieza en el numero 0
// tambien se pueden agregar numeros o incluso booleanos en los arrays

var lluvia = ["Lluvia", true]

//==>
// objet - objeto = son similares a un arreglo
var objeto  = {
    persona : "Jason",
    rangoEdad : 19
}
document.write(objeto);

//==>
// boolean = boleano / sirve para las comparaciones
var booleanT = true;
var booleanF = false;

var maximo = 200
var minimo = 100

//==>
// undefined = Es aquel que no se ha definido
var castro; // variable sin un valor definido

document.write(castro); // va a decir que "castro" esta indefinida

//==>
// null = sirve para cambiar el valor de una variable
var numero2 = 10;
document.write(numero2); // imprime a pantalla el 10

var numero2 = null; //aqui reestablece el valor a 0, para que pueda volver a definir la variable

var numero2 = 12; // aqui reedefine el valor de la variable
document.write(numero2); // imprime a pantalla el 12 (nuevo valor que reemplaza el anterior)

// NaN = 
var texto2 = "Hola como esta";
document.write(texto2 * 2); // en este caso va a devolver un Nan por que estamos tratando de multiplicar un string con un int, es un mensaje de error

var gitHub = "Git Hub"; 
document.write(gitHub); 