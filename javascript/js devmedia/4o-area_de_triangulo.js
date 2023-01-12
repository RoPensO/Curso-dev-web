import entradaDados from 'readline-sync';

console.log("Calculando a área de um triângulo \n");

let base = entradaDados.question("Informe a base do triângulo: ");
let altura = entradaDados.question("Informe a altura do triângulo: ");

let area = (base * altura) / 2;

console.log("A área do triângulo é: "+area);