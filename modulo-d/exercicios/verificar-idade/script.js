const botao = document.querySelector("input[type=button]");

const img = document.createElement("img");

botao.addEventListener("click", verificar);

function verificar() {
    img.removeAttribute("src");

    const anoAtual = new Date().getFullYear();
    const anoNasc = document.querySelector("#anoNasc").value;
    const idade = anoAtual - anoNasc;

    const opcoesSexo = document.querySelectorAll("input[name=sexo]");
    let sexoSelecionado;

    for (let sexo of opcoesSexo) {
        if (sexo.checked == true) {
            sexoSelecionado = sexo.value;
        }
    }
    
    const texto = document.querySelector("#res p");

    if (idade < 0 || anoNasc == "" || sexoSelecionado == undefined) {
        alert("Verifique os dados e tente novamente");
    } else {
        switch (sexoSelecionado) {
            case "masc":
                texto.innerText = `Detectamos homem com ${idade} anos:`;

                if (idade <= 12) {
                    img.setAttribute("src", "img/bebeM.png");
                    img.setAttribute("alt", "menino criança");
                } else if (idade > 12 && idade <= 18 ) {
                    img.setAttribute("src", "img/jovemM.png");
                    img.setAttribute("alt", "menino jovem");
                } else if (idade > 18 && idade < 50) {
                    img.setAttribute("src", "img/adultoM.png");
                    img.setAttribute("alt", "homem adulto");
                } else {
                    img.setAttribute("src", "img/idosoM.png");
                    img.setAttribute("alt", "homem idoso");
                }
                
                break;
            case "fem":
                texto.innerText = `Detectamos mulher com ${idade} anos:`;
                
                if (idade <= 12) {
                    img.setAttribute("src", "img/bebeF.png");
                    img.setAttribute("alt", "menina criança");
                } else if (idade > 12 && idade <= 18 ) {
                    img.setAttribute("src", "img/jovemF.png");
                    img.setAttribute("alt", "menina jovem");
                } else if (idade > 18 && idade < 50) {
                    img.setAttribute("src", "img/adultoF.png");
                    img.setAttribute("alt", "mulher adulta");
                } else {
                    img.setAttribute("src", "img/idosoF.png");
                    img.setAttribute("alt", "mulher idosa");
                }

                break;
            }
        }
    document.querySelector("#res").appendChild(img);
}