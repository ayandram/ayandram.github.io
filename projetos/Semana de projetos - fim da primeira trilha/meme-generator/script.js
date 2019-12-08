let selecaoImagem = document.getElementById("input-para-imagem");
let imagemMeme = document.getElementById("imagem-do-meme");

selecaoImagem.addEventListener('change', function(event){
    imagemMeme.src = URL.createObjectURL(event.target.files[0]);
});

let caixaTextoDown = document.getElementById("input-para-texto-down");
let caixaTextoUp = document.getElementById("input-para-texto-up");
let textoMemeDown = document.getElementById("texto-do-meme-down");
let textoMemeUp = document.getElementById("texto-do-meme-up");

caixaTextoDown.addEventListener('keyup', function() {
    textoMemeDown.innerText = this.value;
});
caixaTextoUp.addEventListener('keyup', function() {
    textoMemeUp.innerText = this.value;
});

let botaoAumentarLetra = document.getElementById("aumentar-letra");
let botaoDiminuirLetra = document.getElementById("diminuir-letra");

botaoAumentarLetra.addEventListener('click', function() {
    let fontSizeAtual = parseInt(getComputedStyle(textoMemeDown).fontSize.substring(0, 2));
    let maxHeightAtual = parseInt(getComputedStyle(textoMemeDown).maxHeight.substring(0, 3));
    let topAtual = parseInt(getComputedStyle(textoMemeDown).top.substring(0, 3));

    if (fontSizeAtual < 60) {
        let fontSizeNovo = 4 + fontSizeAtual;
        let maxHeightNovo = 8 + maxHeightAtual;
        let topNovo = -8 + topAtual;

        textoMemeDown.style.fontSize = fontSizeNovo.toString() + 'px';
        textoMemeUp.style.fontSize = fontSizeNovo.toString() + 'px';
        textoMemeDown.style.maxHeight = maxHeightNovo.toString() + 'px';
        textoMemeUp.style.maxHeight = maxHeightNovo.toString() + 'px';
        textoMemeDown.style.top = topNovo.toString() + 'px';
    }
    else {
        alert("Tamanho maximo!");
    }   
});
botaoDiminuirLetra.addEventListener('click', function() {
    let fontSizeAtual = parseInt(getComputedStyle(textoMemeDown).fontSize.substring(0, 2));
    let maxHeightAtual = parseInt(getComputedStyle(textoMemeDown).maxHeight.substring(0, 3));
    let topAtual = parseInt(getComputedStyle(textoMemeDown).top.substring(0, 3));

    if (fontSizeAtual > 40) {
        let fontSizeNovo = -4 + fontSizeAtual;
        let maxHeightNovo = -8 + maxHeightAtual;
        let topNovo = 8 + topAtual;

        textoMemeDown.style.fontSize = fontSizeNovo.toString() + 'px';
        textoMemeUp.style.fontSize = fontSizeNovo.toString() + 'px';
        textoMemeDown.style.maxHeight = maxHeightNovo.toString() + 'px';
        textoMemeUp.style.maxHeight = maxHeightNovo.toString() + 'px';
        textoMemeDown.style.top = topNovo.toString() + 'px';
    }
    else {
        alert("Tamanho minimo!");
    }   
});

let botaoTrocarBorda = document.getElementById("trocar-borda");
arrayBordas = ["4px solid rgb(0, 0, 0)","8px solid rgb(255, 0, 0)", "8px solid rgb(0, 255, 0)", "8px solid rgb(0, 0, 255)"];

botaoTrocarBorda.addEventListener('click', function() {
    let borderAtual = getComputedStyle(imagemMeme).border;
    let borderNovo = "";

    for (let i = 0; i < 3; i++) {
        if (borderAtual == arrayBordas[i]) {
            borderNovo = arrayBordas[i + 1];
            imagemMeme.style.border = borderNovo;
        }
    }
    if (borderNovo == "") {
        imagemMeme.style.border = arrayBordas[0];
    }
});

let arrayMiniaturas = document.querySelectorAll(".miniatura");

for (let miniatura of arrayMiniaturas) {
    miniatura.addEventListener('click', function() {
        let urlMiniatura = this.src;
        imagemMeme.src = urlMiniatura;
    });
}