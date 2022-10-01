function adicionarOrcamento(produto){
    document.querySelector("#textAreaMensagem").value += produto;
}

function enviarOrcamento(){
    const nome= document.querySelector("#inputNome").value;
    const orcamento = document.querySelector("#textAreaMensagem").value;
    
    const mensagem = orcamento.replace(/(\r\n|\n|\r)/gm,"%0A%0D");

    window.open('https://wa.me/5554997052867?text=Meu nome é '+ nome + '. Gostaria de orçar os seguintes itens: %0A%0D'+mensagem);
}