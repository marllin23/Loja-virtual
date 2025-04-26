let carrinho = [];

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const carrinhoProdutos = document.getElementById('carrinho-produtos');
    const carrinhoBtn = document.getElementById('carrinho-btn');
    const totalElement = document.getElementById('total');

    carrinhoProdutos.innerHTML = ''; // Limpa o carrinho
    let total = 0;

    // Adiciona os produtos no carrinho
    carrinho.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <span>${produto.quantidade}x ${produto.nome}</span>
            <span>R$ ${(produto.preco * produto.quantidade).toFixed(2)}</span>
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        carrinhoProdutos.appendChild(produtoDiv);
        total += produto.preco * produto.quantidade;
    });

    // Atualiza a contagem do carrinho
    carrinhoBtn.textContent = `Carrinho (${carrinho.length})`;

    // Atualiza o total do carrinho
    totalElement.textContent = total.toFixed(2);
}

// Função para adicionar produto ao carrinho
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

// Função para remover produto do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1); // Remove o produto
    atualizarCarrinho();
}

// Mostrar o carrinho quando o botão for clicado
document.getElementById('carrinho-btn').addEventListener('click', () => {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.style.display = carrinhoDiv.style.display === 'none' ? 'block' : 'none';
});
