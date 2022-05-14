// un ciclo for es una estructura que permite repetir el codigo cuantas veces sea necesario...

// ejemplo, para imprimir los numeros hasta el 100

var dias = ["Lunes", " Martes", " Miercoles", " Jueves", " Viernes", " Sabado", " Domingo"]

for ( var tablaNumero = 0; tablaNumero <= dias.length - 1; tablaNumero ++){  //son 3 campos, en el primero se declara la variable, en el segundo hasta cuando se va a ejecutar el ciclo
    document.write("- " + dias[tablaNumero] + "<br>");    // aqui van las instruciones
}

//(se declara varible; se declara cuantas veces se debe ejecutar el ciclo, se dice que quiere que pasa en cada ciclo)