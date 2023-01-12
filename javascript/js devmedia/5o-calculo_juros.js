import entradaDados from 'readline-sync';

console.log("Calculadora de Juros de uma dívida\n");

let valorInicial = entradaDados.question("Digite o Valor iniciar \n");
let diasAtraso = entradaDados.question("Digite quantos dias de atraso \n");

let valorTotal ='';

if (diasAtraso >= 15) {
    valorTotal = Number(valorInicial) + Number((valorInicial * 10) / 100);
} else if (diasAtraso == 1) {
    console.log("Está tudo em dia!")
} else {
    valorTotal = Number(valorInicial) + Number((valorInicial * 5) / 100);
}


console.log("Valor da compra: R$"+valorInicial+",00");
console.log("Dias de atraso: "+diasAtraso+ " dias");
console.log("Valor Total: R$"+valorTotal+",00");
