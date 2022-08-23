//function calcularMedia(n1, n2, n3){
  //  let resultado = (n1 + n2 + n3)/3;
//    return resultado;
//}

//function calcularExame(nota){
//    let resultado = 10 - nota;
//    return resultado;
//}

$("#btOla").click(
    function(){
    //     cadastro = 
    //     {
    //         'Nome':document.getElementById('inputNome').value,
    //         'Endereco':document.getElementById('inputEndereco').value,
    //         'Email':document.getElementById('inputEmail').value
    //     }
    // alert('Meu Nome é: ' +cadastro.Nome + ' sou de ' + cadastro.Endereco);

            //calculo =
              //  {
               //     'n1':document.getElementById('inputN1').value,
              //      'n2':document.getElementById('inputN2').value,
               //     'n3':document.getElementById('inputN3').value
                //}
            //let media = (parseInt(calculo.n1) + parseInt(calculo.n2) + parseInt(calculo.n3)) / 3;
        //let media = calcularMedia(
               // parseInt(calculo.n1),
               // parseInt(calculo.n2),
               // parseInt(calculo.n3)
           // );

            
            if (media >= 7) {
                alert('voce foi aprovado');
            } else {
                alert('voce ficou de exame');
            //    let exame = 10 - media;
            let exame = calcularExame(media);
                alert('voce precisa tirar ' + exame + ' no exame.');
            }

    }
)