function verificar() {
    //window.alert('Funcionou!')
    var data = new Date()
    var ano = data.getFullYear() //ano com 4 dígitos - full
    var fano = document.getElementById('txtano') //o que foi digitado na caixa de texto txtano - está no html
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { //funciona só com  if (fano.value.length == 0 || fano.value > ano)
        window.alert('[ERRO] Verifique os dados e tente novamente') //verifica se o ano digitado é maior que o atual
    }else {
        //window.alert('Tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')//mesma coisa que colocar <img id='foto'
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { //Zero é homem, 1 é mulher (pq homem é a primeira bolinha)
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//mostra a imagem
    }
}