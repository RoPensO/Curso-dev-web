let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} //verificando se o numero é entre 1 e 100

function inLista(n ,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
} //verificando se ele ja foi adicionado a lista

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option') //cria um elemento no html
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //adiciona 'item' a 'lista'
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já inserido na lista.')
    } num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar.')
}   else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / tot
    
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>o Maior número informado foi ${maior}.</p>`
    res.innerHTML += `<p>o Menor número informado foi ${menor}.</p>`
    res.innerHTML += `<p>A Soma de todos os valores é igual a ${soma}.</p>`
    res.innerHTML += `<p>A média de todos os valores é ${media}.</p>`

    }
}