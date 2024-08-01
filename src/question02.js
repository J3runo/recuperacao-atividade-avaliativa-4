import leia from "readline-sync";

var palavra = "";
var consoantes = [];
palavra += leia.question("PALAVRA: ");
var contC = 0
for (var i = 0; i < palavra.length; i++) {
  if (
    palavra[i] === "b" ||
    palavra[i] === "c" ||
    palavra[i] === "d" ||
    palavra[i] === "f" ||
    palavra[i] === "g" || 
    palavra[i] === "h" ||
    palavra[i] === "j" ||
    palavra[i] === "k" ||
    palavra[i] === "l" ||
    palavra[i] === "m" ||
    palavra[i] === "n" ||
    palavra[i] === "p" ||
    palavra[i] === "q" ||
    palavra[i] === "r" ||
    palavra[i] === "s" ||
    palavra[i] === "t" || 
    palavra[i] === "v" ||
    palavra[i] === "x" ||
    palavra[i] === "w" ||
    palavra[i] === "y" ||
    palavra[i] === "z" ){
    consoantes.push(palavra[i]);
    contC++
  }
}
if (consoantes.length > 0) {
  console.log("A palavra " + palavra);
  console.log("CONSOANTES " + consoantes);
  console.log("NUMERO DE CONSOANTES "+contC)
} else {
  console.log("NÂO TEM CONSOANTES ");
} 