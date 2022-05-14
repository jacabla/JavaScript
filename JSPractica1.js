// Practica arrays
var menu = ["Pizza" , " Lasagna" , " Casado "];

menu[menu.length] = " Pollo frito";

menu.push(" Carne asada");

menu.pop(); // elimina el ultimo elemento del array

//document.write(menu);

var menuBar = ["Beer", " Pinna colada", " Sodas"];

menuBar.push(" Lemmonade");

//document.write(menuBar);

var menuCompleto = menu.concat(menuBar);

menuCompleto.sort();

document.write(menuCompleto.join("|")); 