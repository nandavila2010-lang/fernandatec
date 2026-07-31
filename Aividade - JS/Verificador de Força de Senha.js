// Entrada de dados
let senha = prompt("Digite uma senha:");

// Análises
let tamanho = senha.length;
let temMaiuscula = /[A-Z]/.test(senha);
let temMinuscula = /[a-z]/.test(senha);

// Classificação
let classificacao;

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "Forte";
} else {
    classificacao = "Fraca";
}

// Exibição no console
console.log("=== ANÁLISE DE SENHA ===");
console.log("Quantidade de caracteres: " + tamanho);
console.log("Possui letra maiúscula: " + temMaiuscula);
console.log("Possui letra minúscula: " + temMinuscula);
console.log("Classificação: " + classificacao);

// Exibição em alerta
alert(
    "=== ANÁLISE DE SENHA ===\n\n" +
    "Quantidade de caracteres: " + tamanho + "\n" +
    "Classificação: " + classificacao
);