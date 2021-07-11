var agora = new Date();
var diaSem = agora.getDay();
console.log(diaSem);
// diaSem = 7; // para forçar o erro, já que não existe o dia da 
// semana 7 no JS, e cair no defaut neste caso

// para o JS:
// 0 = domingo
// 1 = segunda...
// 6 = sábado

switch (diaSem){
    case 0:
        console.log("Domingo");
        break;    // se não colocar os breaks, irá printar todos os cases a partir do case que entrar
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log('Algo de errado não está certo!')
        break;
    }