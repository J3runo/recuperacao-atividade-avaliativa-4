var numero = [];
var copas = [];
var contCopas = 0;
var espadas = [];
var contEspadas = 0;
var paus = [];
var contPaus = 0;
var outros = [];
var contOutros = 0; 
var numeroDeSorteios = 1000;

for (var i = 0; i < numeroDeSorteios; i++) {
  numero.push(Math.floor(Math.random() * 52));
}

for (var j = 0; j < numero.length; j++) {
 
  if (numero[j] >= 0 && numero[j] <= 12) {
    copas.push(numero[j]);
    contCopas++;
  } else if (numero[j] >= 13 && numero[j] <= 25) {
    espadas.push(numero[j]);
    contEspadas++;
  } else if (numero[j] >= 26 && numero[j] <= 38) {
    paus.push(numero[j]);
    contPaus++;
  } else {
    outros.push(numero[j]);
    contOutros++;
  }
}

var PCopas = (contCopas / numeroDeSorteios) * 100;
var PEspadas = (contEspadas / numeroDeSorteios) * 100;
var PPaus = (contPaus / numeroDeSorteios) * 100;
var POutros = (contOutros / numeroDeSorteios) * 100;

console.log("Quantidade de Copas: " + contCopas + " (" + PCopas.toFixed(2) + "%)");
console.log("Quantidade de Espadas: " + contEspadas + " (" + PEspadas.toFixed(2) + "%)");
console.log("Quantidade de Paus: " + contPaus + " (" + PPaus.toFixed(2) + "%)");
console.log("Quantidade de Outros: " + contOutros + " (" + POutros.toFixed(2) + "%)");

if (PCopas > 30) {
  console.log("O baralho pode estar viciado: Copas com frequência de " + PCopas.toFixed(2) + "%");
  
}
if (PEspadas > 30) {
  console.log("O baralho pode estar viciado: Espadas com frequência de " + PEspadas.toFixed(2) + "%");
  
}
if (PPaus > 30) {
  console.log("O baralho pode estar viciado: Paus com frequência de " + PPaus.toFixed(2) + "%");
 
}
if (POutros > 30) {
  console.log("O baralho pode estar viciado: Outros com frequência de " + POutros.toFixed(2) + "%");
  
}

if (PCopas && PEspadas && PPaus && POutros < 30) {
  console.log("O baralho parece não estar viciado.");
}
 