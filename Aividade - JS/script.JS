let nome = prompt("Digite seu nome:")

let cidade = prompt("Qual sua cidade?")

alert("Olá, " + nome + ". Seja bem-vindo(a)!")

console.log("Nome: " + nome);
console.log("Cidade: " + cidade)

let mumeroSecreto = 7;

let tentativa = Number(prompt("Adivinhe o número secreto:"));

if (tentativa === numeroSecreto) {
    alert("Parabéns! Você acertou!");
} else {
    alert("Que pena! Você errou. O número secreto era " + numeroSecreto + ".");

}

console.log("Tentativa do usuário: " + tentativa);