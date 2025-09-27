// Array de objetos Tarefa
let tarefas = [];

// Seletores
const input = document.getElementById('novaTarefa');
const btn = document.getElementById('adicionar');
const lista = document.getElementById('lista');

// Função para renderizar a lista
function renderizar() {
  lista.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    if (tarefa.status) li.classList.add('concluida');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    checkbox.addEventListener('change', () => {
      tarefas[index].status = !tarefas[index].status;
      renderizar();
    });

    const span = document.createElement('span');
    span.textContent = tarefa.descricao;

    li.appendChild(checkbox);
    li.appendChild(span);
    lista.appendChild(li);
  });
}

// Adicionar nova tarefa
btn.addEventListener('click', () => {
  const descricao = input.value.trim();
  if (descricao !== '') {
    tarefas.push({ descricao, status: false });
    input.value = '';
    renderizar();
  }
});

// Permite adicionar com Enter
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') btn.click();
});