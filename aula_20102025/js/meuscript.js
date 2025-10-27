function exibir(){
    document.getElementById('texto').innerHTML = 'Seu mouse está sobre o texto';
}

function ocultar(){
    document.getElementById('texto').innerHTML = '';
}

function mudaCor(){
    let cor = document.getElementById('cor').style.color;
    if(cor == ''){
        document.getElementById('cor').style.color = 'blue';
    } else {
        document.getElementById('cor').style.color = ''
    }
}