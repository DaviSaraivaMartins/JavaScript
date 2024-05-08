document.addEventListener('DOMContentLoaded', function(){
    var saudacao = document.getElementById('saudacao');
    var imagem  = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    saudacao.innerHTML  = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12){
        // BOM DIA !
        imagem.src = 'manhã.jpg';
        document.body.style.background = '#FFD700'
        

    } else if (hora >= 12 && hora < 18){
        // BOA TARDE !
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#2E8B57'

    } else {
        // BOA NOITE !
        imagem.src = 'noite.jpg';
        document.body.style.background = '#363636'
        
    }
});

