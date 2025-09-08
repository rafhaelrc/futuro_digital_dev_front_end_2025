// 1. Crie as mesmas três variáveis do exercício original.
//    Sinta-se à vontade para trocar estes valores!
let nome = "Ana";
let sobrenome = "Silva";
let profissao = "Desenvolvedora";

// --- MÉTODO ANTIGO (para comparação) ---
// Usando o operador de concatenação (+)
let cartaoAntigo = "Meu nome é " + nome + " " + sobrenome + " e eu sou " + profissao + ".";


// --- MÉTODO NOVO (a solução do exercício) ---
// Usando Template Literals (crases ` e a sintaxe ${...})
// Note como o código fica mais limpo e legível, sem a necessidade de fechar
// aspas e usar o sinal de '+' repetidamente.
let cartaoNovo = `Meu nome é ${nome} ${sobrenome} e eu sou ${profissao}.`;


// 3. Exiba os dois resultados no console para provar que são idênticos.
console.log("Resultado com o método antigo (+):");
console.log(cartaoAntigo);

console.log("\n"); // Adiciona uma linha em branco para separar

console.log("Resultado com o método novo (Template Literals):");
console.log(cartaoNovo);