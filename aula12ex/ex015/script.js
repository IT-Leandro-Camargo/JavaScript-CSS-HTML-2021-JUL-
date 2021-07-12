function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formularioAno = document.getElementById('txtano');
    let res = document.querySelector('div#res');  //usando query para ter como exemplo a forma mais recente de se utilizar ao invés de getElementById

    if(formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente');   
    }else {
        
        let formularioSex = document.getElementsByName('radsex');
        let idade = ano - Number(formularioAno.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(formularioSex[0].checked){ 
            genero = 'Homem';
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', './Imagens/crianca-menino.png');
            }else if(idade < 18){
                img.setAttribute('src', './Imagens/jovem-homem.png');
            }else if(idade < 50) {
                img.setAttribute('src', './Imagens/adulto-homem.png');
            }else {
                img.setAttribute('src', './Imagens/idoso-homem.png');
            }
        }else if (formularioSex[1].checked) {
            genero = 'Mulher';
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', './Imagens/crianca-menina.png');
            }else if(idade < 18){
                img.setAttribute('src', './Imagens/jovem-mulher.png');
            }else if(idade < 50) {
                img.setAttribute('src', './Imagens/adulto-mulher.png');
            }else {
                img.setAttribute('src', './Imagens/idoso-mulher.png');
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `${genero} com ${idade} anos`;
        res.appendChild(img);


        
        // res.innerHTML = `Sexo: ${formularioSex}`;
    }
}