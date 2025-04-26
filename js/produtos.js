const produtos = [
    // Aqui você pode colocar novos produtos se quiser.
];
// Array para armazenar os produtos no carrinho
let carrinho = [];

// Função para atualizar a contagem e total do carrinho
function atualizarCarrinho() {
    const carrinhoProdutos = document.getElementById('carrinho-produtos');
    const carrinhoBtn = document.getElementById('carrinho-btn');
    const totalElement = document.getElementById('total');

    // Limpa o conteúdo atual do carrinho
    carrinhoProdutos.innerHTML = '';
    let total = 0;

    // Adiciona os produtos no carrinho
    carrinho.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <span>${produto.nome}</span>
            <span>R$ ${produto.preco}</span>
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        carrinhoProdutos.appendChild(produtoDiv);
        total += produto.preco;
    });

    // Atualiza a contagem do carrinho
    carrinhoBtn.textContent = `Carrinho (${carrinho.length})`;
    
    // Atualiza o total do carrinho
    totalElement.textContent = total.toFixed(2);
}

// Função para adicionar produtos ao carrinho
document.querySelectorAll('.adicionar').forEach((botao) => {
    botao.addEventListener('click', () => {
        const idProduto = botao.getAttribute('data-produto');
        const nomeProduto = `Produto ${idProduto}`;
        const precoProduto = parseFloat(botao.getAttribute('data-preco')); // <-- PREÇO CERTO VINDO DO BOTÃO

        carrinho.push({ nome: nomeProduto, preco: precoProduto });
        atualizarCarrinho();
    });
});


// Função para remover produtos do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Mostrar o carrinho quando o botão for clicado
document.getElementById('carrinho-btn').addEventListener('click', () => {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.style.display = carrinhoDiv.style.display === 'none' ? 'block' : 'none';
});

// Função para finalizar a compra
document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada com sucesso!');
        
        // Desativa o botão de finalizar compra
        const finalizarCompraBtn = document.getElementById('finalizar-compra');
       finalizarCompraBtn.style.display = 'none'; // Esconde o botão
        finalizarCompraBtn.textContent = 'Compra Finalizada'; // Muda o texto do botão

        // Limpar o carrinho após a compra
        carrinho = [];
        atualizarCarrinho();
    }
});
