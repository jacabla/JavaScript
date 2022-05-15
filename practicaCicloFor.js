// tabla de multiplicar solicitando datos al usuario



var numeroMultiplicar = prompt("Ingrese el valor de la tabla que quiere crear");

var topeTabla = prompt("Ingrese el tope que desea para la tabla del " + numeroMultiplicar);

for ( var aMultiplicar = 0; aMultiplicar <= topeTabla; aMultiplicar ++){
    document.write(numeroMultiplicar + " x " + aMultiplicar + " = " + numeroMultiplicar*aMultiplicar + "<br>");
}


