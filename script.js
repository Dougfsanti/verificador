function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.getElementById(`res`)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - fano.value
        
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-homem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'bebe-mu.png')
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulta-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa-m.png')
            } 
        }       
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    }