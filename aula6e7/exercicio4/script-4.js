console.log("--- Resposta do Exercício 4 ---");

let quantidadeEstoque = 5;

if (quantidadeEstoque > 0) {
    console.log("Produto disponível para compra.");
} else {
    console.log("Produto esgotado.");
}

// Teste com o estoque zerado
quantidadeEstoque = 0;
console.log("\nTestando com estoque = 0:");
if (quantidadeEstoque > 0) {
    console.log("Produto disponível para compra.");
} else {
    console.log("Produto esgotado.");
}