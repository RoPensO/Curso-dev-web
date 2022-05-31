function verificar() {
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.querySelector('div#res')
 if (fano.value.length == 0 || Number(fano.value) > ano) {
     window.alert('[ERRO] Verifique as informações e tente novamente')
 } else {
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute('id','foto')
     if (fsex[0].checked) {
         genero = 'homem'
         if (idade >= 0 && idade < 10) {
             //criança
             img.setAttribute('src', 'crianca-h.png')
         } else if (idade < 25) {
             //rapaz
             img.setAttribute('src', 'jovem-h.png')
         } else if (idade < 50) {
             //homem adulto
             img.setAttribute('src', 'adulto-h.png')
         } else {
             //idoso
             img.setAttribute('src', 'idoso-h.png')
         }
     } else if (fsex[1].checked) {
         genero = 'mulher'
         if (idade >= 0 && idade < 10) {
            //menina
            img.setAttribute('src', 'crianca-m.png')
        } else if (idade < 25) {
            //moça
            img.setAttribute('src', 'jovem-m.png')
        } else if (idade < 50) {
            //mulher adulta
            img.setAttribute('src', 'adulto-m.png')
        } else {
            //idosa
            img.setAttribute('src', 'idoso-m.png')
        }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${genero} com ${idade}.` 
     res.appendChild(img)
 }
}