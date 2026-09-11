console.log("Olá, Luíz! Seja bem-vindo");
console.log("Olá, Gustavo! Seja bem-vindo!");
console.log("Olá Cecília! Seja bem-vinda!");

function darBoasVindas(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo`);
    
}

darBoasVindas("Luíz");
darBoasVindas("Gustavo");
darBoasVindas("Cecília");

function apresentar(nome, idade) {
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
    
}

// Criar uma função que recebe o nome de uma pessoa e mostra uma mensagem dizendo se ela está estudando


function estudando(nome){
    console.log(`${nome} está estudando.`);
}

estudando("Maria cecília");
estudando("Ellen");

function somar(a, b){
    return a + b;

}

somar(5, 3)

let resultado = somar(5, 3);

console.log(resultado);


//Criar uma função que pegue dois valores e de a média deles se for acima de 6 é aprovado senão reprovado

function verificarAprovacao(nota1, nota2) {
  const media = (nota1 + nota2) / 2;

  if (media > 6) {
    return Media: ${media} - Aprovado;
  } else {
    return Media: ${media} - Reprovado;
  }
}

console.log(verificarAprovacao(7, 8)); 
console.log(verificarAprovacao(5, 6));



