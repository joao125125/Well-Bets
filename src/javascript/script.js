//DECLARANDO AS VARIÁVEIS
const placarOficial ={
    1:{time1:2, time2:1},
    2:{time1:2, time2:2}
}

// FUNÇÃO QUE SALVA O PALPITE

function salvarPalpite(nomeJogo,id){

    //CAPTURA OS ELEMENTOS DO DOM
    //`${}` templat string - concatenação
    let input1 = document.getElementById(`time1-${id}`);
    let input2 = document.getElementById(`time2-${id}`);

    //VALIDAÇÃO DOS CAMPOS
    if(input1.value ==="" && input2.value ===""){   
        alert("campos vazios ou inválidos")
        return;
    }
}
//CONVERTE OS VALORES DOS INPUTS DE STRINGS PARA INTEIRO
