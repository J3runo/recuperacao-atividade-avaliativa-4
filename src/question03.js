import leia from "readline-sync";


var n = [];
var soma = 0;
var media = 0;
var maior = 0  
var menor = 1
var cont = -1

while (numero !==0) {
    var numero = leia.questionInt("DIGITE UM NUMERO (ou 0 para parar): ");
    n.push(numero);  
    cont++
}


if (n.length > 0) {
    for (var i = 0; i < n.length; i++) {
        soma += n[i];
        if (n[i] > maior) {
            maior = n[i];
        }
        if (n[i] < menor) {
            menor = n[i];
        }
    }
    
    media = soma / cont-1;  

    console.log("Soma: " + soma);
    console.log("Média: " + media);
    console.log("Maior: " + maior);
    console.log("Menor: " + menor);
    console.log("cont " + cont)
}
