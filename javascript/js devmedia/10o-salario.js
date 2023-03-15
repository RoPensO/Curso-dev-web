let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 662.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

import entradaDados from 'readline-sync';

console.log("\n Comparação salario minimo x inflação")
console.log("\n1 - Listar salários mínimos de 2010 à 2020")
console.log("2 - Listar o índice IPCA de 2010 à 2020")
console.log("3 - Comparação entre percentual de aumento salarial e IPCA\n")

let opcao = entradaDados.question("\nDigite sua escolha: ");

if (opcao == 1) {
    
    console.log("\nValores do salário mínimo entre 2010 e 2020");

    for(let indice = 0; indice < salarioMinimo.length; indice++) {

        let anoSalario = salarioMinimo[indice].ano;
        let valorSalario = salarioMinimo[indice].salario.toFixed(2).replace(".",",");


        console.log("\nAno:".padEnd(30,'.') + anoSalario + "\nSalário mímimo:".padEnd(30,'.') +"R$ "+ valorSalario + "\n");
    }


} else if (opcao == 2) {

    console.log("\nValores da inflação IPCA entre 2010 e 2020");
    
    for(let indice = 0; indice < salarioMinimo.length; indice++) {

        let anoInflacao = inflacao[indice].ano;
        let valorInflacao = inflacao[indice].ipca;


        console.log("\nAno:".padEnd(30,'.') + anoInflacao + "\nInflação IPCA:".padEnd(30,'.')  + valorInflacao +"%\n");
    }

} else if (opcao == 3) {

    for(let indice = 0; indice < salarioMinimo.length; indice++) {

        let anoSalario = salarioMinimo[indice].ano;
        let valorSalario = salarioMinimo[indice].salario.toFixed(2).replace(".",",");
        let valorInflacao = inflacao[indice].ipca;

        

        console.log("\nAno:".padEnd(30,".") + anoSalario + "\nSalário Mínimo:".padEnd(30,".") + valorSalario + "\nCrescimento Salarial:".padEnd(30,".") + "\nInflação IPCA:".padEnd(30,".") + valorInflacao + "\n");

    }

} else {
    console.log("OPÇÃO INVÁLIDA!")
}