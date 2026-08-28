// Questão 1 

let n1 = 10;
let n2 = 5;

console.log("Soma:", n1 + n2);
console.log("Subtração:", n1 - n2);
console.log("MUltiplicação:", n1 * n2);
console.log("Divisão:", n1 / n2);

// Questão 2 

let numero = 8;

console.log("Dobro:", numero * 2);
console.log("Triplo:", numero * 3);

// Questão 3 

let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");

console.log("Olá, " + nome + "! Seja bem-vindo! Você tem " + idade + " anos. ");

// Questão 4

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a Terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media);

// Questão 5

let usuarioCorreto = "admin";
let senhaCoreta = "1234";

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

if (usuario !== usuarioCorreto) {
    console.log("Usuário incorreto.");
} else if (senha !== senhaCoreta) {
    console.log("Senha incorreta.")
} else {
    console.log("Login realizado com sucesso!");
}

// Questão 6

let numero1 = Number(prompt("Digite o primeiro número"));
let numero2 = Number(prompt("Digite o segundo número"));

if (numero1 > numero2){
    console.log("O maior número é " + numero1);
} else if (numero2 > numero1) {
    console.log("O maior número é " + numero2);
} else {
    console.log("Os dois números são iguais.");
}