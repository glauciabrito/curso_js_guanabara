function contar() {
    //o Guanabara fez com let
    var tinicio = document.getElementById('txtinicio') //o que foi digitado na caixa de texto txtinicio - está no html
    var inicio = Number(txtinicio.value) //conversao da entrada para número
    var tfim = document.getElementById('txtfim')
    var fim = Number(txtfim.value)
    var tpasso = document.getElementById('txtpasso')
    var passo = Number(txtpasso.value)
    var res = document.querySelector('div#res')
    //var txtv = window.document.querySelector('input#txtvel')
    if (tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0) { //Number(fano.value) > ano) { //funciona só com  if (fano.value.length == 0 || fano.value > ano)
        res.innerHTML = `Preparando a contagem` //ele faz içamento. Coloca o alert antes da inner
        window.alert('[ERRO] Impossível contar')
    }else if (passo == 0){
        window.alert('Passo inválido. Considerando passo 1')
        passo = 1
        /*for(var c = inicio; c <= fim; c += passo)
        res.innerHTML = `Contando: ${c} -> Fim.`*/
        res.innerHTML = `Contando: <br>`
        var c = inicio
        do {
        res.innerHTML += `${c} \u{1F449} `
        c += passo
        } while (c <= fim)
        //res.innerHTML += `\u{1F3C1}`
    } else if (inicio < fim) { //contagem crescente
        res.innerHTML = `Contando: <br>`
        for(var c = inicio; c <= fim; c+=passo){
        res.innerHTML += `${c} \u{1F449} `//código unicode - só funciona entre crases
    }
        //res.innerHTML += `\u{1F3C1}.`
    } else //contagem regressiva
        res.innerHTML = `Contando: <br>`
        for(var c = inicio; c >= fim; c-=passo){
        res.innerHTML += `${c} \u{1F449} `//código unicode - só funciona entre crases
    }
        res.innerHTML += `\u{1F3C1}.`
      
}