// Caminho da API
const apiUrl = 'http://localhost:8081/produtos';

// Contador de imagens
const contadorImagens = {};

// Função para gerar nome de imagem
function gerarNomeImagem(categoria, numero) {
  const prefixo = categoria.slice(0, 3).toLowerCase();
  const numeroFormatado = String(numero).padStart(2, '0');
  return `${prefixo}${numeroFormatado}.jpg`;
}

// Função para criar os cards
function criarCard(produto) {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-4';

  const card = document.createElement('div');
  card.className = 'card h-100';

  const categoria = produto.categoria.descricao;
  if (!contadorImagens[categoria]) contadorImagens[categoria] = 1;
  else contadorImagens[categoria]++;

  const nomeImagem = gerarNomeImagem(categoria, contadorImagens[categoria]);
  const caminhoImagem = `../../icons/myitens/${nomeImagem}`;

  const img = document.createElement('img');
  img.src = caminhoImagem;
  img.className = 'card-img-top';
  img.alt = produto.descricao;

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body d-flex flex-column';

  const title = document.createElement('h5');
  title.className = 'card-title';
  title.textContent = produto.nome;

  const descricao = document.createElement('p');
  descricao.className = 'card-text';
  descricao.textContent = produto.descricao;

  const preco = document.createElement('p');
  preco.className = 'price';
  preco.textContent = 'Preço: R$ ' + produto.preco.toFixed(2);

  const button = document.createElement('a');
  button.href = 'detalhes.html?id=' + produto.id;
  button.className = 'btn btn-primary mt-auto';
  button.textContent = 'Ver Detalhes';

  cardBody.append(title, descricao, preco, button);
  card.append(img, cardBody);
  col.appendChild(card);

  return col;
}

// Função para carregar os produtos
function carregarProdutos() {
  const produtoList = document.getElementById('produto-list');
  const errorMessage = document.getElementById('error-message');
  produtoList.innerHTML = '';
  errorMessage.textContent = '';

  axios.get(apiUrl)
    .then(response => {
      response.data.forEach(produto => {
        const card = criarCard(produto);
        produtoList.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Erro:', error);
      errorMessage.textContent = 'Ocorreu um erro ao carregar os produtos.';
    });
}

// Chamar a função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarProdutos);
