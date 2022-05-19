// para capturar todos los elementos de un mismo tipo desde el HTML, por ejemplo todas las etiquetas <p>

var elementosP = document.getElementsByTagName("p");


var elemento = document.getElementById("parrafo1")


//con .innerHTML se puede acceder al contenido del elemento


//nodos (agregar cualquier elemento en html desde java script), esto se usa cuando el usuario debe interactuar con la pagina, por ejemplo agregar un comentario o un elemento en una lista

// para poder agregar un nodo (elemento) en pantalla desde java script
// 1. Crear un elemento
var crearElemento = document.createElement("h2"); // de esta manera se crea cualquier elemento, en este ejemplo un h2.

// 2. Crear un nodo de texto
var contenido = document.createTextNode("Hola mundo"); // aca se ingresa todo el contenido que se va a mostrar dento del elemento creado (el h2)

// 3. Anadir el nodo de texto al elemento... aqui se junta
crearElemento.appendChild(contenido); // aca se llama la variable y se el agrega el contenido

// 4. Agregar atributos al elemento //
crearElemento.setAttribute("aligne","center") // de esta manera se le agrega el atributo que va a tener (como si fuera CSS)

// 5. Agrear el elemento al documento, y esto es lo mas importante, agregarlo.
// para esto en el HTML se le debe crear un <div> y asginarle un id, en este caso el id es "subtitulo"
document.getElementById("subtitulo").appendChild(crearElemento); // entoces en el document se captura por medio del id y se le pone appendChild con el elemento creado




// ejemplo de otro parrafo agregado

var parrafo3 = document.createElement("p");
var textoParrafo3 = document.createTextNode("Esto es una prueba de que con constancia todo se puede");
parrafo3.appendChild(textoParrafo3);
parrafo3.setAttribute("color","red");
document.getElementById("parrafo2").appendChild(parrafo3);


// 

var parrafo4 = document.createElement("p");
var contenidoP4 = document.createTextNode("Sigue asi y lo alcanzaras Jason");
parrafo4.appendChild(contenidoP4);
parrafo4.setAttribute("aligne","center");
document.getElementById("parrafo2").appendChild(parrafo4);




