// Função para alternar a exibição do input de pesquisa
function toggleSearchInput() {
  var input = document.getElementById('searchInput');
  input.classList.toggle('show-search-input');

  var button = document.getElementById('searchButton');
  button.classList.toggle('rotate-animation');
}

// Função para esconder o input de pesquisa ao perder o foco
function hideSearchInput() {
  var input = document.getElementById('searchInput');
  input.classList.remove('show-search-input');

  var button = document.getElementById('searchButton');
  button.classList.remove('rotate-animation');
}
