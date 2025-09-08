// --- Parte 1: Usando o Operador de Módulo (%) ---

console.log("--- Parte 1: Operador de Módulo (%) ---");

// Cenário: 15 itens para empacotar em caixas que comportam 4.
let totalItens = 15;
let itensPorCaixa = 4;

// Usa o operador de módulo (%) para encontrar o resto da divisão.
let itensSobrando = totalItens % itensPorCaixa;

// Exibe o resultado com uma mensagem descritiva.
// 15 dividido por 4 é 3, com um resto de 3.
console.log(`Com ${totalItens} itens e caixas que comportam ${itensPorCaixa}, sobrarão: ${itensSobrando} item(s).`);


// Adiciona uma linha em branco para separar as partes no console.
console.log("\n");


// --- Parte 2: Usando o Operador de Incremento (++) ---

console.log("--- Parte 2: Operador de Incremento (++) ---");

// Declara a variável contador com o valor inicial 0.
let contador = 0;
console.log("Valor inicial do contador:", contador);

// Usa o operador de incremento (++) três vezes.
contador++; // contador agora é 1
contador++; // contador agora é 2
contador++; // contador agora é 3

// Exibe o valor final da variável contador.
console.log("Após incrementar 3 vezes, o valor final é:", contador);