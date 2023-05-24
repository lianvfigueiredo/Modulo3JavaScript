var lamp = window.document.getElementById('image')

function estaQuebrada(){
    return image.src.indexOf('Quebrada') > -1
}

function ligar(){
    estaQuebrada() ? alert('A lâmpada está quebrada') : lamp.src = 'assets/images/lampadaOn.svg'
}
function desligar(){
    estaQuebrada() ? alert('A lâmpada está quebrada') : lamp.src = 'assets/images/lampadaOff.svg'
}

lamp.addEventListener ('click', quebrar)
function quebrar(){
    lamp.src = 'assets/images/lampadaQuebrada.svg'
}
