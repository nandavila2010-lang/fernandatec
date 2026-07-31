// Entrada de dados
let nomeProduto = prompt("Digite o nome do produto:");
let precoOriginal = parseFloat(prompt("Digite o preço original do produto:"));
let percentualDesconto = parseFloat(prompt("Digite o percentual de desconto (%):"));

// Cálculos
let valorDesconto = precoOriginal * (percentualDesconto / 100);
let precoFinal = precoOriginal - valorDesconto;

// Exibição no console

console.log("Produto: " + nomeProduto);
console.log("Preço Original: R$ " + precoOriginal.toFixed(2));
console.log("Desconto: " + percentualDesconto + "%");
console.log("Valor do Desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço Final: R$ " + precoFinal.toFixed(2));

// Exibição em alerta
alert(
    
    "Produto: " + nomeProduto + "\n" +
    "Preço Original: R$ " + precoOriginal.toFixed(2) + "\n" +
    "Desconto: " + percentualDesconto + "%\n" +
    "Valor do Desconto: R$ " + valorDesconto.toFixed(2) + "\n" +
    "Preço Final: R$ " + precoFinal.toFixed(2)
);