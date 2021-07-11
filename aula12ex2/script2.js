// alert('Meu primeiro site!');

function escrever() {
    var texto = 'Testando...';
    var texDinamico = texto.split("");
    // console.log(texDinamico);
    for(letra of texDinamico){
        console.log(letra);
        setInterval(() => { 
             
        }, 1000);
    }
}

escrever();