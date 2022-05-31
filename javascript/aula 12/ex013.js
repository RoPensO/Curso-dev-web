var agora = new Date()
var diaSem = agora.getDay()

/*
0= Domingo
1= segunda
2= terça
3= quarta
4= quinta
5= sexta
6= sábado
7= domingo
*/

switch(diaSem) {
    case 0:
        console.log('DOMINGO!')
        break
    case 1:
        console.log('SEGUNDA!')
        break
    case 2:
        console.log('TERÇA!')
        break
    case 3:
        console.log('QUARTA!')
        break
    case 4:
        console.log('QUINTA!')
        break
    case 5:
        console.log('SEXTA!')
        break
    case 6:
        console.log('SÁBADO')
        break
}