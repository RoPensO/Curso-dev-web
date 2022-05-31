//Arrays seguem a ordem de colocação do código, ele executa de cima para baixo sempre

let num = [5,6,8] //array

num[3]=1 //adiciona numero na posição desejada(lembrando que sempre começa com a 0, então aqui é na posição 4)

num.push(7) //adiciona numero na próxima posição
num.push(888)

console.log(num.length) //mostra o comprimeiro do array
console.log(num) //mostra todos os elementos que tem em um array
console.log(`o valor do primeiro valor é ${num[0]}`)

console.log(num.sort()) //organiza o array em ordem crescente

let pos = num.indexOf(8) //usado para encontrar valor dentro de uma array e retorna a posição ***CAMEL CASE CUIDADO***
if (pos == -1){ //retorna -1 quando não encontra nenhum valor dentro do vetor
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}