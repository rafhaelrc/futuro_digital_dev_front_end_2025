// 1. Declare as variáveis com os dados da inscrição.
//    Sinta-se à vontade para alterar estes valores para testar!
const nomeParticipante = "Carlos Andrade";
const nomeEvento = "JS Conference 2025";
const precoIngresso = 65.50;
const quantidadeIngressos = 2;


// 2. Calcule o custo total da compra.
const custoTotal = precoIngresso * quantidadeIngressos;


// 3. Gere a mensagem de confirmação usando Template Literals.
//    Note o uso de múltiplas linhas e a interpolação das variáveis e do cálculo.
//    Usamos .toFixed(2) para garantir que o valor monetário sempre tenha duas casas decimais.
const mensagemConfirmacao = `
Olá, ${nomeParticipante}!

Sua inscrição para o evento "${nomeEvento}" foi confirmada com sucesso.

Detalhes da compra:
- Quantidade de Ingressos: ${quantidadeIngressos}
- Custo Total: R$ ${custoTotal.toFixed(2)}

Aguardamos você!
`;


// 4. Verifique se o cliente tem direito a um brinde (custo > R$ 100).
//    A expressão `custoTotal > 100` retornará `true` ou `false`.
let direitoABrinde = custoTotal > 100;

// 5. Exiba tudo no console de forma organizada.
console.log("--- E-mail de Confirmação Gerado ---");
console.log(mensagemConfirmacao);

console.log("--- Verificação de Bônus ---");
console.log(`Direito a brinde especial: ${direitoABrinde}`);