function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        alert('por favor digite um numero')
    } else {
        let n = Number(num.value)
        /* pode usar while ou for */
        let c = 1
        tab.innerHTML = '' /* limpar a tela após uma execução */
        while (c <= 10) {
            /* criar elemento */
            let item = document.createElement('option')
            /* poderia criar pelo html tmb com o atributo option */
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) /* adicionar elemento filho */
            c++
        }
    }
    
}