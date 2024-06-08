var Leonardo = window.document.getElementById('leonardo')
var Samanta = window.document.getElementById('samanta')
var Bruna = window.document.getElementById('bruna')
var SetaDireita = window.document.getElementById('setaDireita')
var SetaEsquerda = window.document.getElementById('setaEsquerda')

function RolarParaDireita(){

    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}

