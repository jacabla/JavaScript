// while (condicion){ // la condicion de aca se ejecuta mientras la expresion sea verdadera
    //expresion 
//}

//ejemplo

var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

var diasSemana = semana.length - 1;

var contador = 0;

while(contador <= diasSemana){
    document.write(semana[contador] + "<br>");
    contador++;
}