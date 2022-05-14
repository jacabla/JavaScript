
var condicion1 = "Mayor 18 annos";
var condicion2 = "Asalariaddo";
var condicion3 = "Record crediticio limpio";

if (condicion1 == "Mayor 18 annos"){
    document.write("Cumple con una condicion");
}else if(condicion1 == "Mayor 18 annos" && condicion2 == "Asalariado"){;
    document.write("Cumple con dos condiciones " + condicion1, " y " + condicion2);
}else if(condicion1 = "Mayor 18 annos" && condicion2 == "Asalariado" && condicion3 == "Record crediticio limpio"){
    document.write("Cumple con las 3 condiciones; " +condicion1 + condicion2 + condicion3);
}
else{
    document.write("Lo siento pero debe cumplir con alguna de las condiciones")
}

