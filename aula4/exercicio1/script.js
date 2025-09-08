// 1. Declare duas variáveis, num1 e num2, com números diferentes.
//let num1 = 20;
//let num2 = 4;



let num1 = parseFloat(prompt("Por favor, digite o primeiro número: "));
let num2 = parseFloat(prompt("Por favor, digite o segundo número: "));

console.log("Calculando com os números:", num1, "e", num2);
console.log("-------------------------------------");

// 2. Crie variáveis para armazenar os resultados das operações.

// Soma
let resultadoSoma = num1 + num2;

// Subtração
let resultadoSubtracao = num1 - num2;

// Multiplicação
let resultadoMultiplicacao = num1 * num2;

// Divisão
let resultadoDivisao = num1 / num2;


// 3. Use console.log() para exibir cada resultado com uma mensagem descritiva.
console.log("O resultado da soma é:". resultadoSoma);
alert("O resultado é: " + resultadoSoma);
console.log("O resultado da subtração é:", resultadoSubtracao);
console.log("O resultado da multiplicação é:", resultadoMultiplicacao);
console.log("O resultado da divisão é:", resultadoDivisao);