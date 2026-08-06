let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

console.log("Média: " + media);

if (media < 4) {
    console.log("REPROVADO");
    alert("REPROVADO");
} else if (media >= 5 && media <= 6) {
    console.log("RECUPERAÇÃO");
    alert("RECUPERAÇÃO");
} else if (media >= 7) {
    console.log("APROVADO");
    alert("APROVADO");
} else {
    console.log("Média sem classificação.");
    alert("Média sem classificação.");
}