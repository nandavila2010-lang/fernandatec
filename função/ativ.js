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

if (total >=2.000,00) {
    console.log(`${nome} está dentro do orçamento!`);
} else {
    console.log(`${nome} está fora do orçamento`);
}

calcularTotal(passagem, hospedagem, alimentação, passeios)
