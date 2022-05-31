function carregar()
    {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horah = data.getHours()
    //var horam = data.getMinutes()
    
    msg.innerHTML = `Agora são ${horah} horas.`
    if (horah >= 0 && horah < 12){
        img.src = "manha.png"
        document.body.style.background = '#f8fd65'
        //bom dia
    } else if (horah >=12 && horah < 18) {
        img.src = "tarde.png"
        document.body.style.background = '#f04b03'
        //boa tarde
    } else {
        img.src = "noite.png"
        document.body.style.background = '#443559'
        //boa noite
    }
}