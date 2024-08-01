import leia from "readline-sync"

var cont = 0;
var NMvelha;
var NMnova;
var Mvelha
var Mnova
var nome = []
var idade
while (cont < 5) {
    nome = leia.question("NOME: ");
    idade = leia.questionInt("IDADE: ");
    if(Mvelha === undefined && Mnova === undefined){
        NMnova = nome
        NMvelha = nome
        Mvelha = idade
        Mnova = idade
    }
    if (idade > Mvelha) {
        Mvelha = idade;
        NMvelha = nome;
    }

    if (idade < Mnova) {
        Mnova = idade;
        NMnova = nome;
    }

    cont++;
}

console.log("Nome da pessoa mais velha: " + NMvelha + " - Idade: " + Mvelha);
console.log("----------------------------------------------------")
console.log("Nome da pessoa mais nova: " + NMnova + " - Idade: " + Mnova);
