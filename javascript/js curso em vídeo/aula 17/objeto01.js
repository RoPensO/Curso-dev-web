let amigo = {nome: 'José',
sexo: 'M',
peso: '86,9',
engordar(p){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(1)
console.log(`O ${amigo.nome} pesa ${amigo.peso}kg.`)