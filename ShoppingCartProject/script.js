const olOfCartItems = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');

// Requisito 11 

const secaoItems = document.querySelector('.items');
const loading = document.createElement('p');
  loading.className = 'loading';
  loading.innerText = 'carregando...';
  secaoItems.appendChild(loading);

// FUNÇÃO DA TRYBE; CRIA A IMAGEM DO PRODUTO.
  const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

//  FUNÇÃO DA TRYBE: CRIA O ELEMENTO 
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

//  FUNÇÃO DA TRYBE: ELEMENTOS QUE SÃO CRIADOS.
const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// REQUISITO 9

const getPrice = (elemento) => {
  const elementoInnerHTML = elemento.innerHTML;
  const preco = elementoInnerHTML.substring(elementoInnerHTML.lastIndexOf('$') + 1); // aqui ele pega do valor para frente, e não pega o cifrão.
  const precoConvertido = Number(preco); // transforma qualquer coisa em número.
  return precoConvertido;
};

const salvaPrecoLocalStorage = (preco, operacao) => {
  const precoAntigo = Number(localStorage.getItem('totalPrice'));
  let precoNovo = 0;
  if (operacao === 'sum') {
    precoNovo = precoAntigo + preco;
  } if (operacao === 'sub') {
    precoNovo = precoAntigo - preco;
  }
  precoNovo = Math.round(precoNovo * 100) / 100;
  localStorage.setItem('totalPrice', precoNovo);
  console.log(precoNovo);
};

const adicionaValorHtml = () => { 
  totalPrice.innerHTML = localStorage.getItem('totalPrice');
};

const atualizarPrecoTotal = (preco, operacao) => {
  salvaPrecoLocalStorage(preco, operacao);
  adicionaValorHtml();
};

// REQUISITO 5: REMOVE ITEM DO CARRINHO
const cartItemClickListener = (event) => {
  const preco = getPrice(event.target);
  atualizarPrecoTotal(preco, 'sub');
  event.target.remove();
  saveCartItems(olOfCartItems);
};

//  FUNÇÃO DA TRYBE
function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// REQUISITO 4: ADICIONA ITEM NO CARRINHO. Dentro da const buttonItem pego .item__add e para cada clique, o escutador
// vai pegar o item selecionado, colocar como filho da ol, e retornar o objeto que vai ser armazenado no carrinho (cria o elemento no carrinho).
const addCartItem = () => {
  const buttonItem = document.querySelectorAll('.item__add');
  buttonItem.forEach((button) => button.addEventListener('click', async () => {
   const selectId = button.parentNode.firstElementChild.innerHTML;
   const object = await fetchItem(selectId);
   const objAdd = { sku: object.id, name: object.title, salePrice: object.price };
   olOfCartItems.appendChild(createCartItemElement(objAdd));
   atualizarPrecoTotal(object.price, 'sum');
   saveCartItems(olOfCartItems.innerHTML);
  }));
};

//  REQUISITO 2: CRIA LISTAGEM DE PRODUTOS. 
const criaSeçaoItem = async () => {
  const sectionMain = document.querySelector('.items');
  const produtoComputador = await fetchProducts('computador');
  produtoComputador.results.forEach((computador) => {
  const { id, title, thumbnail } = computador;
  const product = {
    sku: id,
    name: title,
    image: thumbnail, 
  };
  sectionMain.appendChild(createProductItemElement(product));
});
  loading.outerHTML = '';
   // getSum();
   addCartItem();
};

criaSeçaoItem();

// const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// REQUISITO 10 

const esvaziarCarrinho = document.querySelector('.empty-cart');
      esvaziarCarrinho.addEventListener('click', () => {
        olOfCartItems.innerHTML = '';
        localStorage.removeItem('cartItems');
        localStorage.setItem('totalPrice', 0);
       adicionaValorHtml();
      });

const storage = () => {
  const localStorage = getSavedCartItems();
  olOfCartItems.innerHTML = localStorage;
  const newLine = document.querySelectorAll('.cart__item');
  newLine.forEach((item) => item.addEventListener('click', (event) => event.target.remove()));
};

window.onload = () => {
  storage(); 
  adicionaValorHtml();
};
