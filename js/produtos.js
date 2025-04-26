
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

    carrinhoProdutos.innerHTML = ''; // Limpa carrinho
    let total = 0;

    // Para cada produto no carrinho, cria um item visual
    carrinho.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto-carrinho');
        produtoDiv.innerHTML = `
            <strong>${produto.nome}</strong> - R$ ${produto.preco.toFixed(2)}
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        carrinhoProdutos.appendChild(produtoDiv);
        total += produto.preco; // Soma preço
    });

    // Atualiza o número de itens no botão do carrinho
    carrinhoBtn.textContent = `Carrinho (${carrinho.length})`;
    totalElement.textContent = total.toFixed(2); // Atualiza o total
}

// Função para adicionar produto
document.querySelectorAll('.adicionar').forEach((botao) => {
    botao.addEventListener('click', () => {
        const idProduto = botao.getAttribute('data-produto');
        const nomeProduto = `Produto ${idProduto}`;
        const precoProduto = parseFloat(botao.getAttribute('data-preco')); // <-- PREÇO CERTO VINDO DO BOTÃO

        carrinho.push({ nome: nomeProduto, preco: precoProduto });
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


  
