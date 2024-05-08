function verificar (){
   // window.alert('funcionou')
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if ( fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
    //window.alert('tudo ok')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    //res.innerHTML = `idade calculada: ${idade}`
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (fsex[0].checked){
        gênero = 'Homem'

        if (idade >=0 && idade < 10) {
            // Criança
            img.setAttribute('src','bebe-masc.jpg')

        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'jovem-m.jpg')
        }else if (idade < 50){
            // Adulto
            img.setAttribute('src', 'adulto.jpg')
        }else {
            // Idoso
            img.setAttribute('src', 'idoso.jpg')
        }
    

    } else if (fsex [1].checked){
        gênero = 'mulher'
        
        if ( idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'bebe-fem.jpg')
        }else if (idade <21){
            //Jovem
            img.setAttribute('src', 'jovem-f.jpg')
         }else if (idade <50){
            // Adulto
            img.setAttribute('src', 'adulto-f.jpg')
         }else{
            // Idoso
            img.setAttribute('src', 'idosa.jpg')
         }
    }
        res.style.textAlign = 'center' // codigo para centralizar o texto
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
   }
}