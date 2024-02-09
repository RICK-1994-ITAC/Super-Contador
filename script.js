function contar() {
    var inicio = document.getElementById('cinicio')
    var fim = document.getElementById('cfim')
    var passo = document.getElementById('cpasso')
    var res = document.getElementById('calculo')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (inicio.value.length ==0 || fim.value.length ==0 || passo.value.length ==0) {
        //window.alert('[ERRO] Confira se faltou algum dado')
        res.innerText ='Impossivel Contar'
    }else {
       res.innerHTML='Contando... <br>'
       
       if (p <=0) {
        window.alert('Passo invalido, considerando passo 1')
        p=1
       }
       if (i < f) {
            for (var c = i; c <= f; c+=p) {
            res.innerText +=` ${c} \u{1F449}`
            }
       }else {
            for (var c = i; c >= f; c-=p) {
                res.innerText +=` ${c} \u{1F449}`
                }
        }
        res.innerText += `\u{1F3c1}`        
    }
   
}