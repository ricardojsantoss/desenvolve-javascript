// --- Recupera tarefas salvas ou cria array vazio ---
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Seletores
const input = document.getElementById('novaTarefa');
const btn = document.getElementById('adicionar');
const lista = document.getElementById('lista');

// Salva array no localStorage
function salvar() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Renderiza a lista completa
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
      salvar();
      renderizar();
    });

    const span = document.createElement('span');
    span.textContent = tarefa.descricao;

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.classList.add('excluir');
    btnExcluir.addEventListener('click', () => {
      tarefas.splice(index, 1);  // remove do array
      salvar();
      renderizar();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnExcluir);
    lista.appendChild(li);
  });
}

// Adicionar nova tarefa
btn.addEventListener('click', () => {
  const descricao = input.value.trim();
  if (descricao !== '') {
    tarefas.push({ descricao, status: false });
    input.value = '';
    salvar();
    renderizar();
  }
});

// Permite adicionar com Enter
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') btn.click();
});

// Renderiza ao abrir a página (usando dados do localStorage)
renderizar();