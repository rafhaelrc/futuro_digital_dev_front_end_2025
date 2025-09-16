console.log("--- Resposta do Exercício 7 ---");

let tipoVeiculo = "carro";

console.log(`O veículo é do tipo: ${tipoVeiculo}`);
switch (tipoVeiculo) {
    case "carro":
    case "moto":
        console.log("Categoria: Veículo particular");
        break;
    case "onibus":
        console.log("Categoria: Veículo coletivo");
        break;
    default:
        console.log("Categoria: Tipo de veículo não identificado");
}