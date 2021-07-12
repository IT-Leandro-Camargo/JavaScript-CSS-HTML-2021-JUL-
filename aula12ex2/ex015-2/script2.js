function verificar() {
   let data = new Date();
   let ano = data.getFullYear();
   let formularioAno = document.querySelector('input#txtano');    
   let idade = ano - Number(formularioAno.value);
   let formularioSexo = document.getElementsByName('radsex');
   let genero = '';
   let resultado = document.querySelector('div#resultado');
   let img = document.getElementById('imagem');
//    img.setAttribute('id', 'foto');

   if(idade < 0 || formularioAno.value.length == 0) {
       alert('[ERRO] Informe os dados corretamente');
   }else {
       if(formularioSexo[0].checked) {
           genero = 'Feminino';
           if(idade >= 0 && idade < 10) { 
               if(idade == 1) {
                   resultado.innerHTML = `Registrada menina de ${idade} ano`;
                   img.src = './Imagens/crianca-menina.png';
               }else {
                   resultado.innerHTML = `Registrada menina de ${idade} anos`;
                   img.src = './Imagens/crianca-menina.png';
               }
            }else if(idade < 18) {
                resultado.innerHTML = `Registrada mulher de ${idade} anos`;
                img.src = './Imagens/jovem-mulher.png';
            }else if(idade < 60) {
                resultado.innerHTML = `Registrada mulher de ${idade} anos`;
                img.src = './Imagens/adulto-mulher.png';
            }else {
                resultado.innerHTML = `Registrada mulher de ${idade} anos`;
                img.src = './Imagens/idoso-mulher.png';
            }
        }else if(formularioSexo[1].checked) {
            genero = 'Masculino';
           if(idade >= 0 && idade < 10) {
               if(idade == 1) {
                   resultado.innerHTML = `Registrado menino de ${idade} ano`;
                   img.src = './Imagens/crianca-menino.png';
               }else {
                   resultado.innerHTML = `Registrado menino de ${idade} anos`;
                   img.src = './Imagens/crianca-menino.png';
               }
            }else if(idade < 18) {
                resultado.innerHTML = `Registrado homem de ${idade} anos`;
                img.src = './Imagens/jovem-homem.png';
            }else if(idade < 60) {
                resultado.innerHTML = `Registrado homem de ${idade} anos`;
                img.src = './Imagens/adulto-homem.png';
            }else {
                resultado.innerHTML = `Registrado homem de ${idade} anos`;
                img.src = './Imagens/idoso-homem.png';
            }
        }    
   }     
}

