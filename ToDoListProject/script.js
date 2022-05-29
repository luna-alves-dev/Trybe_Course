window.onload = function () {
    const savedTasks = localStorage.getItem('tasks');
    const parsedTasks = JSON.parse(savedTasks);
    const tasksList = document.getElementById('lista-tarefas');
  
    if (parsedTasks !== '') {
      tasksList.innerHTML = parsedTasks;
    }
  }
  //Parsed realizado com ajuda de um amigo programador. 
  function mudaCor(event) {
    const tasks = document.getElementsByClassName('item-lista');
    for (let index = 0; index < tasks.length; index += 1) {
      tasks[index].classList.remove('ativo');
    }
    event.target.classList.add('ativo');
  }
  
  function adicionaEvento() {
    const tasks = document.getElementsByClassName('item-lista');
    for (let index = 0; index < tasks.length; index += 1) {
      tasks[index].addEventListener('click', mudaCor);
    }
  }
  
  function createNewTask() {
    const newTask = document.querySelector('#texto-tarefa');
    const tasksList = document.querySelector('#lista-tarefas');
    if (newTask.value !== '') {
      const newLiItem = document.createElement('li');
      newLiItem.classList.add('item-lista');
      newLiItem.innerText = newTask.value;
      tasksList.appendChild(newLiItem);
      newTask.value = '';
      adicionaEvento();
    }
  }
  const botaoAdiciona = document.querySelector('#cria-tarefa');
  botaoAdiciona.addEventListener('click', createNewTask);
  
  function tarefaCompleta() {
    document.addEventListener('dblclick', function (event) {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else if (event.target.classList.contains('item-lista')) {
        event.target.classList.add('completed');
      }
    });
  }
  
  tarefaCompleta();
  
 
  function deletaTarefa() {
    const tasksList = document.getElementById('lista-tarefas');
  
    tasksList.innerHTML = '';
    localStorage.removeItem('tasks');
  }
  
  const deleteButton = document.getElementById('apaga-tudo');
  deleteButton.addEventListener('click', deletaTarefa);
  
  
  function deletaTarefaCompleta() {
    const completedTasks = document.getElementsByClassName('completed');
  
    while (completedTasks.length > 0) {
      completedTasks[0].parentNode.removeChild(completedTasks[0]);
    }
  }
  
  const botaoDeletaCompletado = document.getElementById('remove-finalizado');
  botaoDeletaCompletado.addEventListener('click', deletaTarefaCompleta);
  
  
  function salvaTarefa() {
    const tasksList = document.getElementById('lista-tarefas').innerHTML;
    const tasksListStringfied = JSON.stringify(tasksList);
  
    if (tasksList.length > 0) {
      localStorage.setItem('tasks', tasksListStringfied);
    }
  }
  
  const saveButton = document.getElementById('salva-tarefas');
  saveButton.addEventListener('click', salvaTarefa);
  
  
  function moveParaCima() {
    const ativo = document.querySelector('.ativo');
    const lista = document.querySelector('ol');
    const listaFirstChild = lista.firstElementChild;
  
    if (lista.hasChildNodes(ativo) && ativo !== listaFirstChild) {
      ativo.before(ativo);
      ativo.after(ativo.previousElementSibling);
    }
  }
  const upButton = document.getElementById('mover-para-cima');
  upButton.addEventListener('click', function () {
    try {
      moveParaCima();
    } catch (error) {}
  });
  
  function moveParaBaixo() {
    const ativo = document.querySelector('.ativo');
    const lista = document.querySelector('ol');
    const listaLastChild = lista.lastElementChild;
  
    if (lista.hasChildNodes(ativo) && ativo !== listaLastChild) {
      ativo.before(ativo.nextElementSibling);
      ativo.after(ativo);
    }
  }
  
  const downButton = document.getElementById('mover-para-baixo');
  downButton.addEventListener('click', function () {
    try {
      moveParaBaixo();
    } catch (error) {}
  });
  

  function deletaTarefaSelecionada() {
    const ativo = document.querySelector('.ativo');
  
    ativo.remove();
  }
  
  const delSelectedButton = document.getElementById('remove-selecionado');
  delSelectedButton.addEventListener('click', deletaTarefaSelecionada);
  