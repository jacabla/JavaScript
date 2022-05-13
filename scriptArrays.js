// arrays tambien conocidos como vectores, es como tener muchas variables en una sola
// por ejemplo

//sin array

var amigo1 = "Jason"
var amigo2 = "Luis"
var amigo3 = "Jose"

// con array

var amigos = ["Jason", "Luis", "Jose"]
// es lo mismo solo que almacenada en una sola variable
// para acceder se hace de esta manera var[], la posicion (empezando de 0)
document.write(amigos[1]); // en este caso mostrara el nombre de Luis, pues esta en el lugar 1
// para cambiar un dato de alguno de los arrays se hace de la siguiente manera

amigos[0] = "Jason Alonso"; // en este caso modifica Jason x Jason Alonso, ya que el valor de una var no se puede borrar, pero si reemplazar
document.write(amigos[0]); // imprime Jason Alonso

//metodos y propiedades para los arreglos

//==> para acceder a una propiedad se pone la var + .
document.write(amigos.length); // lo que va a imprimir es cuantos elementos tiene el array
// se puede concater texto mas var.length
document.write("Tienes " + amigos.length + "amigos"); // aca imprime "Tienes 3 amigos"

//==> para agregar un nuevo elemento al array se hace la siguiente manera
amigos[amigos.length] = "Cali"; // de esta manera se accede al ultimo elemento del array y se agrega el nuevo elemento
document.write(amigos); // imprime Jason Alonso, Luis, Jose y Cali ( el nuevo elemento)

//tambien se puede agregar de la siguiente manera con el push
amigos.push("Marco");
document.write(amigos); //imprime Jason Alonso, Luis, Jose, Cali y Marco ( el nuevo elemento)

// tambien se pueden eliminar con el pop
amigos.pop[2];
document.write(amigos); //en este caso elimina de la lista a Jose, e imprime todos menos el eliminado

// si tenemos dos arrays y queremos juntarlos?
var amigosP = ["Julio", "Oscar", "Berny", "Virgil"]; // este es el segundo array
// para sumar amigos + amigosP en una nueva variable se hace de la siguiente manera creando una tercera variable

var amigosGeneral = amigos.concat(amigosP); // el primer array y el que se le quiere concatenar dentro del parentesis
document.write(amigosGeneral); // imprime todos los amigos, a partir de aqui pasa a ser una nueva variable con los dos array anteriores

//==> el metodo join sirve para agregar elementos entre cada unos de los elementos del array
amigosGeneral.join(" - "); // en este caso imprimiria Jason Alonso - Luis - Jose... y asi sucesivamente

//==> con el .sort se pueden ordenar alfabeticamente
amigosGeneral.sort();
document.write(amigosGeneral); // imprime los elementos del array pero de forma alfabetica