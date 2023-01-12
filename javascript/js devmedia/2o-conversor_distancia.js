import entradaDados from 'readline-sync';

console.log("Conversor de Milhas para Quilômetros: \n");

let  mi = entradaDados.question("Informe o valor em Milhas: ");
let ki = mi / 0.62137;

console.log(mi+" milhas é igual a " +ki+"km")
