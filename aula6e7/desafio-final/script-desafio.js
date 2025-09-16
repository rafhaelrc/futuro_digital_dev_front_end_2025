console.log("--- Resposta do Desafio Final: Sistema da Pizzaria ---");

let diaDaSemana = "quarta";
let valorPedido = 100.00;
let formaPagamento = "pix";
let valorAposPromocao = valorPedido;

console.log(`Valor Original do Pedido: R$ ${valorPedido.toFixed(2)}`);
console.log(`Dia da semana: ${diaDaSemana} | Forma de pagamento: ${formaPagamento}`);
console.log("------------------------------------");

// 1. Promoção do Dia (if...else if...else)
if (diaDaSemana === "segunda" || diaDaSemana === "terca" || diaDaSemana === "quarta" || diaDaSemana === "quinta") {
    valorAposPromocao *= 0.90; // 10% de desconto
    console.log('Promoção do dia (10% OFF) aplicada.');
} else if (diaDaSemana === "domingo") {
    valorAposPromocao *= 1.05; // 5% de taxa
    console.log('Taxa de serviço de domingo (5%) aplicada.');
} else {
    console.log('Sem promoção para hoje.');
}

console.log(`Valor após promoção: R$ ${valorAposPromocao.toFixed(2)}`);

// 2. Desconto por Pagamento (switch)
let valorFinal = valorAposPromocao;
switch (formaPagamento) {
    case "pix":
    case "dinheiro":
        valorFinal *= 0.95; // 5% de desconto adicional
        console.log(`Desconto de pagamento (${formaPagamento}) de 5% aplicado.`);
        break;
    case "cartao":
        console.log(`Sem desconto adicional para pagamento com ${formaPagamento}.`);
        break;
    default:
        console.log('Forma de pagamento desconhecida.');
}

// 3. Resultado Final
console.log("------------------------------------");
console.log(`VALOR FINAL A PAGAR: R$ ${valorFinal.toFixed(2)}`);