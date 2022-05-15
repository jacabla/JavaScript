var num1 = prompt("Ingrese el primer numero a sumar");
var num2 = prompt("Ingrese el segundo numero a sumar");

var suma = function(num1, num2){
    return parseInt(num1) + parseInt(num2)
}

alert("La suma de los dos numeros digitados es " + suma(num1,num2));