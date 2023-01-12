import entradaDadosTemperatura from 'readline-sync';

console.log("Conversor de temperatura (Celsius para Kelvin) \n");

let celsius = entradaDadosTemperatura.question("Informe o valor em Celsius a ser convertido: ");

let kelvin = Number(celsius) + 273.15;

console.log(celsius+"°C é igual a "+kelvin+"°K");