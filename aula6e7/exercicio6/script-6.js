console.log("--- Resposta do Exercício 6 ---");

let digitado = "TaRdEe";
let periodo = digitado.toLowerCase(); 

console.log(`O período é: ${periodo}`);

if(periodo.length > 5){
    console.log("Você digitou a string de forma errada..");
}

switch (periodo) {
    case "manha":
        console.log("Bom dia");
        break;
    case "tarde":
        console.log("Boa tarde");
        break;
    case "noite":
        console.log("Boa noite");
        break;
    default:
        console.log("Período não reconhecido.");
        break;
}