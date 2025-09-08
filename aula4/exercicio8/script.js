// 1. Declare as duas variáveis com valores numéricos.
//    Sinta-se à vontade para alterar estes valores e ver o resultado mudar!
let preco = 29.99;
let quantidade = 3;

// Exibe os valores base no console para referência.
console.log(`Preço unitário: R$ ${preco}`);
console.log(`Quantidade: ${quantidade}`);
console.log("-----------------------------------------");


// 2. Crie a string usando Template Literals.
//    A expressão `preco * quantidade` é calculada PRIMEIRO, e o resultado
//    é inserido diretamente na string.
let mensagemDeTotal = `O valor total da sua compra é de R$ ${preco * quantidade}.`;


// 3. Exiba a mensagem final no console.
console.log(mensagemDeTotal);


// --- DICA EXTRA: Formatando o número ---
// Às vezes, cálculos com números decimais podem gerar resultados imprecisos
// (ex: 89.97000000000001). Podemos usar o método .toFixed(2) para
// garantir que o resultado tenha sempre duas casas decimais.
let totalFormatado = (preco * quantidade).toFixed(2);
let mensagemFormatada = `O valor total formatado é de R$ ${totalFormatado}.`;

console.log("\n--- Dica Extra ---");
console.log(mensagemFormatada);