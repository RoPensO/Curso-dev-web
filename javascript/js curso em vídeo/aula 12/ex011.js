var idade = 66
console.log(`você tem ${idade} anos, portanto`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 65) {
    console.log('o voto é opcional')
} else {
    console.log('o voto é obrigatório')
}