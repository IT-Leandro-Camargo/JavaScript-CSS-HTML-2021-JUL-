function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    // hora = 8;
    // hora = 13;
    // hora = 20;
    msg.innerHTML = `Agora são ${hora}:${minutos}h`;
    
    
    if(hora >= 0 && hora < 12) {
        // Bom dia
        img.src = './imagens/manha.png';
        document.body.style.background = '#dddd77';
    }else if(hora >= 12 && hora < 18) {
        // Boa tarde
        img.src = './imagens/tarde.png';
        document.body.style.background = '#b9846f';
    }else {
        // Boa noite
        img.src = './imagens/noite.png';
        document.body.style.background = '#515154';
    }
}
