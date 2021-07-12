function carregar() {
    let msg = document.getElementById('msg');
    let msg2 = document.getElementById('msg2');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    // hora = 8;
    // hora = 13;
    // hora = 20;
    msg.innerHTML = `Agora são ${hora}:${minutos}h`;
    msg2.innerHTML = "";

    if(hora >= 0 && hora < 12) {
        msg2.innerHTML = "Bom dia!";
        img.src = './Imagens/manha.png'; 
        document.body.style.backgroundColor = 'rgb(170, 253, 46)';
    }else if(hora >= 12 && hora < 18) {
        msg2.innerHTML = "Boa tarde!";
        img.src = './Imagens/tarde.png';
        document.body.style.backgroundColor = 'rgb(114, 153, 58)';
    }else {
        msg2.innerHTML = "Boa noite!";
        img.src = './Imagens/noite.png';
        document.body.style.backgroundColor = 'rgb(63, 77, 44)';
    }

    
    
}

// escrever();