import leia from "readline-sync"

var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&"
var QDigitos;
var SENHA = []
var n = []

QDigitos = leia.questionInt("QUANTIDADE DE DIGITOS DA SENHA: ")
for(var i = 0; i<QDigitos; i++){
    n= parseInt(Math.random() * 68);
    SENHA.push(char[n])
    
}

console.log("Senha gerada: " + SENHA);




 