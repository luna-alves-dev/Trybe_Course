const addButton = document.querySelector('#criar-tarefa');
const clearAllButton = document.querySelector('#apaga-tudo');
const clearComplButton = document.querySelector('#remover-finalizados');
const textInput = document.querySelector('#texto-tarefa');
const orderedList = document.querySelector('#lista-tarefas');

function changeColor(event) {
  const selected = document.querySelector('.selected');

  if (selected === null) {
    event.target.classList.add('selected');
  } if (selected !== null) {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function taskDone(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addList() {
  const listItem = document.createElement('li'); listItem.innerHTML = textInput.value;
  listItem.classList.add('list-item');
  orderedList.appendChild(listItem);
  textInput.value = '';
  listItem.addEventListener('click', changeColor);
  listItem.addEventListener('dobleClick', taskDone);
}

function clearAll() {
  const allItens = document.querySelectorAll('.list-item');

  for (let index = allItens.length; index > 0; index -= 1) {
    orderedList.removeChild(orderedList.childNodes[index]);
  }
}
