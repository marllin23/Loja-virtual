const produtos = [
];
console.log("Script carregado!");

  
  // Pega o elemento div onde os produtos vão aparecer
  const containerProdutos = document.getElementById('produtos');
  
  // Para cada produto, cria um card HTML
  produtos.forEach(produto => {
    const div = document.createElement('div');
    div.classList.add('produto');
    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="adicionarCarrinho(${produto.id})">Adicionar ao Carrinho</button>
    `;
    containerProdutos.appendChild(div);
  });
  
  // Função que será chamada ao clicar no botão
  function adicionarCarrinho(id) {
    alert(`Produto ${id} adicionado ao carrinho!`);
  }
// Array para armazenar os produtos no carrinho
// Array para armazenar os produtos no carrinho
let carrinho = [];

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const carrinhoProdutos = document.getElementById('carrinho-produtos');
    const carrinhoBtn = document.getElementById('carrinho-btn');
    const totalElement = document.getElementById('total');

    carrinhoProdutos.innerHTML = '';
    let total = 0;

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

    carrinhoBtn.textContent = `Carrinho (${carrinho.length})`;
    totalElement.textContent = total.toFixed(2);
}

    // Atualiza o número de itens no botão do carrinho
    carrinhoBtn.textContent = `Carrinho (${carrinho.length})`;
    totalElement.textContent = total.toFixed(2); // Atualiza o total
}

// Função para adicionar produto
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


// Função para remover produto
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Mostra ou esconde o carrinho
document.getElementById('carrinho-btn').addEventListener('click', () => {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.style.display = carrinhoDiv.style.display === 'none' ? 'block' : 'none';
});
// Ação ao clicar em "Finalizar Compra"
document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada com sucesso! Obrigado pela preferência ❤️');
        carrinho = []; // Limpa o carrinho
        atualizarCarrinho(); // Atualiza o carrinho para zero
        // Opcional: esconder o carrinho de novo
        document.getElementById('carrinho').style.display = 'none';
    }
});


  
