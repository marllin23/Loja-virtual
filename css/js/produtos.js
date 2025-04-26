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
  
