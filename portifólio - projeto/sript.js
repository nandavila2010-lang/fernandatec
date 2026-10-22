const botaoMenu = document.getElementById("menu-hamburguer");
const menu = document.getElementById("menu-principal");

botaoMenu.addEventListener("click", function () {
menu.classList.toggle("ativo");

// Atualiza a informação do menu para acessibilidade
const estaAberto = menu.classList.contains("ativo");

botaoMenu.setAttribute("aria-expanded", estaAberto);

if (estaAberto) {
botaoMenu.setAttribute("aria-label", "Fechar menu");
} else {
botaoMenu.setAttribute("aria-label", "Abrir menu");
}
});

// Fecha o menu quando uma opção é selecionada
const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {
     link.addEventListener("click", function () {
        menu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
});
});


// 2. SAUDAÇÃO DINÂMICA: muda conforme o horário

const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

if (hora < 12) {
saudacao.textContent = "Bom dia! Que bom ter você aqui.";
} else if (hora < 18) {
saudacao.textContent = "Boa tarde! Que bom ter você aqui.";
} else {
saudacao.textContent = "Boa noite! Que bom ter você aqui.";
}


// 3. MODO CLARO: muda algumas cores do site

const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function () {
document.body.classList.toggle("modo-claro");

if (document.body.classList.contains("modo-claro")) {
    botaoTema.textContent = "☾";
    botaoTema.setAttribute("aria-label", "Ativar tema roxo");

} else {
botaoTema.textContent = "☼";
botaoTema.setAttribute("aria-label", "Ativar modo claro");
}
});


// 4. FOTO: mostra o espaço reservado se a foto não existir

const foto = document.getElementById("foto-perfil");
const espacoFoto = document.getElementById("foto-placeholder");

// Esconde a foto caso o arquivo não seja encontrado
foto.addEventListener("error", function () {
foto.style.display = "none";
espacoFoto.style.display = "flex";
});

// Esconde o espaço reservado quando a foto carregar
foto.addEventListener("load", function () {
foto.style.display = "block";
espacoFoto.style.display = "none";
});

// Verifica também se a imagem já carregou
if (foto.complete && foto.naturalWidth > 0) {
foto.style.display = "block";
espacoFoto.style.display = "none";
}


// 5. FORMULÁRIO: verifica os campos e mostra uma mensagem

const formulario = document.getElementById("form-contato");
const avisoFormulario = document.getElementById("aviso-formulario");

formulario.addEventListener("submit", function (evento) {
// Impede o envio real do formulário
evento.preventDefault();

const nome = document.getElementById("nome").value.trim();
const aceitou = document.getElementById("consentimento").checked;

if (nome === "" || !aceitou) {
avisoFormulario.textContent =
    "Preencha os campos e marque o consentimento.";
} else {
avisoFormulario.textContent =
    "Tudo certo! Este formulário é apenas uma demonstração.";

formulario.reset();
}
});


// 6. ANO AUTOMÁTICO NO RODAPÉ

const anoAtual = new Date().getFullYear();

document.getElementById("ano").textContent = anoAtual;