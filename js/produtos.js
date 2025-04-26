const produtos = [
    { id: 1, nome: "Tênis Esportivo", preco: 199.90, imagem: "https://via.placeholder.com/200x150" },
    { id: 2, nome: "Camiseta Casual", preco: 89.90, imagem: "https://via.placeholder.com/200x150" },
    { id: 3, nome: "Mochila Executiva", preco: 149.90, imagem: "https://via.placeholder.com/200x150" }
    
  ];
  
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
        const precoProduto = parseFloat((Math.random() * (100 - 10) + 10).toFixed(2)); // Preço aleatório para exemplo

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

  
