var credito = ["Fiador", " Hipotecario", " Hipoteca revolutiva"];

credito.push(" Prenda");

credito[credito.length] = " CDP";

credito.push(" Deduccion planilla");

credito.pop();

var tasas = [24, 36, 18, 20];

var oferta = credito.concat(tasas);

credito.sort();

document.write(oferta.join(" - "));