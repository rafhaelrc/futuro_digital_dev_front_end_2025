// A string base fornecida no exercício.
let frase = "Estudar programação é muito bom!";

// Exibe a frase original para referência.
console.log("Frase original:", frase);
console.log("-----------------------------------");


// 1. Use a propriedade .length para descobrir o número de caracteres.
//    A propriedade .length conta todos os caracteres, incluindo espaços e pontuação.
let tamanhoDaFrase = frase.length;
console.log("1. Comprimento da frase:", tamanhoDaFrase, "caracteres.");


// 2. Use o método .toUpperCase() para converter a frase para maiúsculas.
//    Este método retorna uma NOVA string, não modifica a original.
let fraseMaiuscula = frase.toUpperCase();
console.log("2. Frase em maiúsculas:", fraseMaiuscula);


// 3. Use o método .replace() para trocar "bom" por "legal".
//    Este método também retorna uma NOVA string com a substituição feita.
let fraseModificada = frase.replace("bom", "legal");


// 4. Exiba o novo resultado (a frase modificada) no console.
console.log("3. Frase com 'bom' trocado por 'legal':", fraseModificada);