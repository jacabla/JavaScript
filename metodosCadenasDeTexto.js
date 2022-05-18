
// el .length lo que hace es imprimir cuantos caracteres tiene una cadena de texto

var texto = "Jason";

var nuevoTexto = texto.length;

document.write(nuevoTexto); // en este caso imprime 5 




// el .substring que permite cortar una cadena de texto, emepzando de la posicion que se elija (empieza a cortar de adelante hacia atras)

var texto = "Jason";

var nuevoTexto = texto.substring(2); // aca se indica que corte desde la posicion 2 de la cadena de texto 

document.write(nuevoTexto); // en este caso imprime solo "son", ya que se indica que elimine los primeros 2 caracteres del texto



// el .substr lo que hace mostrar la cantidad de caracteres que se le asigne en la posicion (desde, hasta) y eliminar el resto de los caracteres
var texto = "Jason";

var nuevoTexto = texto.substr(0,3);

document.write(nuevoTexto); // en este caso imprime del caracter 0 al 3, es decir imprime Jas solamente


// el .indexof devuelve en que posicion se encuentra una letra

var nombre = "Jason";

var nuevoNombre = nombre.indexOf("a");

document.write(nuevoNombre); // en este caso imprime el numero 1, ya que es la posicion que la letra a tiene en la cadena de texto.
// y con el .lastindexof se ejecuta lo mismo pero de atras hacia adelante.



// el .replace permite sustituir una cadena de texto por otra, debe recibir dos parametros
var nombre = "Jason";

var nuevoNombre = nombre.replace("Jason", "Jason Alonso" );

document.write(nuevoNombre);


// el .touppercase se cambia el texto a mayuscula, igual aplica con el tolowercase

var nombre = "Jason";

var nuevoNombre = nombre.toLocaleUpperCase();

document.write(nuevoNombre);


//==>
var nombre = "JASON";

var nuevoNombre = nombre.toLocaleLowerCase();

document.write(nuevoNombre);