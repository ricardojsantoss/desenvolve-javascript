// Array de livros
const estoque = [];

// Adicionar livro
function adicionarLivro(titulo, autor, quantidade) {
  const livroExistente = estoque.find(l => l.titulo === titulo);
  if (livroExistente) {
    console.log(`O livro "${titulo}" já existe no estoque.`);
  } else {
    estoque.push({ titulo, autor, quantidade });
    console.log(`Adicionado: ${titulo}`);
  }
}

// Remover livro
function removerLivro(titulo) {
  const index = estoque.findIndex(l => l.titulo === titulo);
  if (index >= 0) {
    estoque.splice(index, 1);
    console.log(`Removido: ${titulo}`);
  } else {
    console.log(`Livro "${titulo}" não encontrado.`);
  }
}

// Atualizar quantidade
function atualizarQuantidade(titulo, novaQuantidade) {
  const livro = estoque.find(l => l.titulo === titulo);
  if (livro) {
    livro.quantidade = novaQuantidade;
    console.log(`Quantidade atualizada: ${titulo} agora tem ${novaQuantidade} unidades.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado.`);
  }
}

// Listar livros
function listarLivros() {
  if (estoque.length === 0) {
    console.log("Nenhum livro no estoque.");
  } else {
    console.log("Livros disponíveis:");
    estoque.forEach(l =>
      console.log(`- ${l.titulo} | Autor: ${l.autor} | Qtd: ${l.quantidade}`)
    );
  }
}

// Demonstração
adicionarLivro("Dom Casmurro", "Machado de Assis", 5);
adicionarLivro("1984", "George Orwell", 8);
listarLivros();
atualizarQuantidade("1984", 10);
removerLivro("Dom Casmurro");
listarLivros();