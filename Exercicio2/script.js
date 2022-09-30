function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'crianca-m.jpeg')
            }else if (idade < 21){
                img.setAttribute('src', 'jovem-m.jpeg')
            }else if (idade < 50){
                img.setAttribute('src', 'adulto-m.jpeg')
            }else{
                img.setAttribute('src', 'idoso-m.jpeg')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher' 
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-crianca-f.jpeg')
            }else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-f.jpeg')
            }else if (idade < 50){
                img.setAttribute('src', 'foto-Adulto-f.jpeg')
            }else{
                img.setAttribute('src', 'foto-idosa-f.jpeg')
            }

         }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}

