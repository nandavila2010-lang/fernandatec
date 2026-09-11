function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;    
}

let nome = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota1 = Number(prompt("Digite a segunda nota:"));

let media = calcularMedia(nota1, nota2);

console.log(`${nome} ficou com média ${media}`);

if (media1 >=6) {
    console.log(`${nome} está aprovado!`);
} else {
    console.log(`${nome} está reprovado!`);
}

calcularMedia(nota1, nota2)


//Atividade 

function calcularTotal(passagem, hospedagem, alimentação, passeios) {
    return (passagem + hospedagem + alimentação + passeios);
}

let nome = prompt("Digite seu nome:");
let passagem = Number(prompt("Digite o valor da passagem"));
let hospedagem = Number(prompt("Digite o valor da hospedagem"));
let alimentação = Number(prompt("Digite o valor da alimentação"));
let passeios = Number(prompt("Digite o valor dos passeios"));

let total = calcularTotal(passagem, hospedagem, alimentação, passeios);

console.log(`${nome} ficou com valor ${total}`);

if (total >=2000) {
    console.log(`${nome} está fora do orçamento!`);
} else {
    console.log(`${nome} está dentro do orçamento!`);
}

calcularTotal(passagem, hospedagem, alimentação, passeios)