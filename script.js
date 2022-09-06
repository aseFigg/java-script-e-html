function pegarItem(item, valor){
    if ((item == "arroz") || (valor == 10)) {
        console.log(item +  " Valor:"+ valor);
    }
}


$("#btOla").click(
    function(){
        produto =
        [
            {"nome": "arroz", "valor":19},
            {"nome": "feijao", "valor":25},
            {"nome": "ovo", "valor":18},
        ];

        console.log(produto[0].nome);
        console.log(produto[1].valor);
        console.log(produto[2].valor)

        //console.log(aluno.nome);
        //console.log(aluno2.nome);

        //listaCompras = ["arroz", "arroz", "feijao", "ovo"]
        //valorProduto = [10,     12   ,     10,     1];

        //for (i = 0; i<=3; i++) {
        //    pegarItem(listaCompras[i], valorProduto[i]);
        //}

    }
);