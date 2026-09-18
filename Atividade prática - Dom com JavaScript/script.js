function mostrarCidade() {

    let cidade = document.getElementById("cidade").value;

    document.getElementById("mensagem").textContent = "Que legal! Você escolheu conhecer " + cidade + "!";

}

function destacarMensagem() {
    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "blue";
    mensagem.style.fontSize = "24px";
    mensagem.style.backgroundColor = "lightblue";   
}

let valor = 10;

function aumentar() {
    valor = valor + 1;

    document.getElementById("contador").textContent = valor;
    
}

function diminuir() {
    valor = valor - 1;

    document.getElementById("contador").textContent = valor;
    
}
