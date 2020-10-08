const hora = new Date().getHours();

const textoHora = document.querySelector("div#titulo h2");
const imagem = document.querySelector("div#imagem img");
const estiloBody = document.querySelector("body").style;

textoHora.innerText += ` ${hora} horas`

if (hora == 6) {
    imagem.src = "img/amanhecendo.png";
    imagem.alt = "nascer do sol";
    estiloBody.backgroundColor = "#eac89b";
} else if (hora > 6 && hora < 18) {
    imagem.src = "img/dia.png";
    imagem.alt = "paisagem de dia";
    estiloBody.backgroundColor = "#328dde";

    if (hora == 12) {
        textoHora.innerText = 'Agora é meio-dia';
    }
} else if (hora == 18) {
    imagem.src = "img/anoitecendo.png";
    imagem.alt = "pôr do sol";
    estiloBody.backgroundColor = "#ed6734";
} else {
    imagem.src = "img/noite.png";
    imagem.alt = "paisagem de noite";
    estiloBody.backgroundColor = "#182744";

    if (hora == 0) {
        textoHora.innerText = "Agora é meia noite";
    }
}