console.log("--- Resposta do Exercício 1 ---");

let a = 10;
let b = "10";
let c = 0;
let d = false;

console.log(`a == b  (10 == "10"):`, a == b);   // true, pois == converte o tipo antes de comparar.
console.log(`a === b (10 === "10"):`, a === b);  // false, pois === compara o tipo (number vs string).
console.log(`c == d  (0 == false):`, c == d);   // true, pois == converte boolean para número (false vira 0).
console.log(`c === d (0 === false):`, c === d);  // false, pois === compara o tipo (number vs boolean).