
var edad = prompt("Ingrese la edad de la persona")

var nombre = prompt("Ingrese el nombre de la persona")

var salario = prompt("Ingrese el monto de  salario mensual de " + nombre)

var montoSolicitado = prompt("Ingrese el monto solicitado")

var edadMinima = 18

var edadMaxima = 65

function calculoCapacidadPago(capacidad){
    var capacidad = (montoSolicitado / salario) * 2.5
}

if (edad >= edadMinima && edad <= edadMaxima){
    alert(nombre + " cumple con la edad para realizar la solicitud de credito")
}else{
    alert(nombre + " no cumple con la edad para realizar la solicitud de credito la cual debe ser entre " + edadMinima + " & " + edadMaxima)
}

if (calculoCapacidadPago >= 5 && calculoCapacidadPago <= 10 ){
    alert("Cliente cumple con la capacidad de pago esperada")   
}else{
    document.write("El solicitante " + nombre + " No cumple con los requisitos para realizar la solicitud pues su ingreso mensual no es suficiente" )
    }

//if ()
//document.write("El solicitante " + nombre + "con " + edad + "annos de edad, quien presenta un ingreso mensual de " + salario + "tiene las condiciones necesarias para solicitar " + montoSolicitado)