function tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //isso vale para o php. Passa o valor da tab: linha 1, linha 2...
            tab.appendChild(item) //para o item aparecer na tela
            c++
        }
    }
}