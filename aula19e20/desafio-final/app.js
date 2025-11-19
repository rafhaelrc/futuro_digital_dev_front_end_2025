// Espera a página carregar inteira
window.onload = function() {

  // Seleciona os elementos que vamos usar
  var statusInput = document.getElementById('status-input');
  var salvarBtn = document.getElementById('salvar-status');
  var chaveStorage = 'meuStatusSalvo'; // Chave para o localStorage

  // --- PASSO 11: Carregar o dado salvo ---
  function carregarStatusSalvo() {
    var statusSalvo = localStorage.getItem(chaveStorage);
    if (statusSalvo) { // Se achou algo salvo...
      statusInput.value = statusSalvo; // Coloca no input
    }
  }

  // --- PASSO 10: Salvar o dado ---
  function salvarStatus() {
    var statusAtual = statusInput.value;
    // Salva no localStorage
    localStorage.setItem(chaveStorage, statusAtual);
    alert('Status salvo com sucesso!');
  }

  // Adiciona o "ouvinte" de clique no botão
  salvarBtn.addEventListener('click', salvarStatus);

  // Roda a função de carregar assim que a página abre
  carregarStatusSalvo();

};