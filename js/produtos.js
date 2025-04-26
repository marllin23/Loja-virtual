document.querySelectorAll('.adicionar').forEach((botao) => {
    botao.addEventListener('click', () => {
        const idProduto = botao.getAttribute('data-produto');
        const nomeProduto = `Produto ${idProduto}`;
        const precoProduto = parseFloat(botao.getAttribute('data-preco'));

        // Verifica se já tem esse produto no carrinho
        const produtoExistente = carrinho.find(item => item.nome === nomeProduto);

        if (produtoExistente) {
            produtoExistente.quantidade += 1;
        } else {
            carrinho.push({ nome: nomeProduto, preco: precoProduto, quantidade: 1 });
        }

        atualizarCarrinho();
    });
});
