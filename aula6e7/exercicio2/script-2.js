console.log("--- Resposta do Exercício 2 ---");

let isAdmin = false;
let isLoggedIn = true;
let isPremium = true;

// A condição é: ser admin OU (estar logado E ser premium)
if (isAdmin || (isLoggedIn && isPremium)) {
  console.log("Acesso concedido!");
} else {
  console.log("Acesso negado!");
}