function multip() {
    let num = document.getElementById('txtn')

    if (num.value.length == 0) {
        alert("[erro] Por Favor Insira um Número")
        res.innerHTML = 'impossivel calcular'
    } else {
        let nm = Number(num.value)
        if (nm < 0) {
            alert('Por favor usar apenas números inteiros e positivos')
        } else { 
            res.innerHTML = ''
            for (let c = 1; c <= 10; c++) {
                var multp = nm * c
                res.innerHTML += `${nm} x ${c} = ${multp} <br>`
            }
        }
    }
}