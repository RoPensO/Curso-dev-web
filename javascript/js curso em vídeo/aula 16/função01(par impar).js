function parimpar(n) { //'n' aqui é chamado de parametro formal
    if (n%2==0) {
        return "par"
    } else {
        return "ímpar"
    }
}

let res = parimpar(n) //chamada - 'n' aqui é chamado de parametro real
console.log(res)