let botaoGerarCarta = document.getElementById("gerar-carta");
let lugarDaFrase = document.getElementById("lugar-da-frase");

let arrayBackgroundColor = ['blue', 'green', 'red', 'yellow', 'orange', 'purple'];
let arrayBackgroundImage = ["url('https://projects-static.raspberrypi.org/projects/mystery-letter/2a96eebd88c217c889597b8045bb99dae95d9218/en/resources/mystery-letter-computer-printout-paper.png')", "url('https://projects-static.raspberrypi.org/projects/mystery-letter/2a96eebd88c217c889597b8045bb99dae95d9218/en/resources/mystery-letter-pink-pattern.png')", "url('https://projects-static.raspberrypi.org/projects/mystery-letter/2a96eebd88c217c889597b8045bb99dae95d9218/en/resources/mystery-letter-canvas.png')", "url('https://projects-static.raspberrypi.org/projects/mystery-letter/2a96eebd88c217c889597b8045bb99dae95d9218/en/resources/mystery-letter-rough-paper.png')"];
let arrayFontSize = ['50px', '60px', '70px', '80px', '90px', '100px'];
let arrayTransform = ['rotate(-5deg)', 'rotate(5deg)', 'skew(5deg, 5deg)', 'skew(-5deg, -5deg)'];
let arraytextDecoration = ['underline'];
let arrayFontStyle = ['italic'];

window.onload = function() {
    arrayPalavras = ['Digite', 'aqui', 'sua', 'carta', 'misteriosa!']

    for (let palavraASerGerada of arrayPalavras) {
        let palavra = document.createElement("p");
        palavra.innerText = palavraASerGerada;
        lugarDaFrase.appendChild(palavra);
        palavra.style.backgroundColor = arrayBackgroundColor[geraPosicaoAleatoria(5)];
        palavra.style.backgroundImage = arrayBackgroundImage[geraPosicaoAleatoria(7)];
        palavra.style.fontSize = arrayFontSize[geraPosicaoAleatoria(5)];
        palavra.style.transform = arrayTransform[geraPosicaoAleatoria(7)];
        palavra.style.textDecoration = arraytextDecoration[geraPosicaoAleatoria(1)];
        palavra.style.fontStyle = arrayFontStyle[geraPosicaoAleatoria(1)];
    }

    let novoArrayPalavras = document.getElementsByTagName("p");
    for (let p of novoArrayPalavras) {
        p.addEventListener('click', function() {
            this.style.backgroundColor = arrayBackgroundColor[geraPosicaoAleatoria(5)];
            this.style.backgroundImage = arrayBackgroundImage[geraPosicaoAleatoria(7)];
            this.style.fontSize = arrayFontSize[geraPosicaoAleatoria(5)];
            this.style.transform = arrayTransform[geraPosicaoAleatoria(7)];
            this.style.textDecoration = arraytextDecoration[geraPosicaoAleatoria(1)];
            this.style.fontStyle = arrayFontStyle[geraPosicaoAleatoria(1)];
        });
    }
}

botaoGerarCarta.addEventListener('click', function() {
    let fraseASerGerada = document.querySelector("input").value;
    let arrayPalavras = fraseASerGerada.split(" ");
    let quantidadePalavras = arrayPalavras.length;
    let contador = document.getElementById("contador");
    contador.innerText = 'Quantidade de palavras geradas abaixo: ' + quantidadePalavras.toString();
    
    lugarDaFrase.innerHTML = "";

    for (let palavraASerGerada of arrayPalavras) {
        let palavra = document.createElement("p");
        palavra.innerText = palavraASerGerada;
        lugarDaFrase.appendChild(palavra);
        palavra.style.backgroundColor = arrayBackgroundColor[geraPosicaoAleatoria(5)];
        palavra.style.backgroundImage = arrayBackgroundImage[geraPosicaoAleatoria(7)];
        palavra.style.fontSize = arrayFontSize[geraPosicaoAleatoria(5)];
        palavra.style.transform = arrayTransform[geraPosicaoAleatoria(7)];
        palavra.style.textDecoration = arraytextDecoration[geraPosicaoAleatoria(1)];
        palavra.style.fontStyle = arrayFontStyle[geraPosicaoAleatoria(1)];

 
    }

    let novoArrayPalavras = document.getElementsByTagName("p");
    for (let p of novoArrayPalavras) {
        p.addEventListener('click', function() {
            this.style.backgroundColor = arrayBackgroundColor[geraPosicaoAleatoria(5)];
            this.style.backgroundImage = arrayBackgroundImage[geraPosicaoAleatoria(7)];
            this.style.fontSize = arrayFontSize[geraPosicaoAleatoria(5)];
            this.style.transform = arrayTransform[geraPosicaoAleatoria(7)];
            this.style.textDecoration = arraytextDecoration[geraPosicaoAleatoria(1)];
            this.style.fontStyle = arrayFontStyle[geraPosicaoAleatoria(1)];
        });
    }
});

function geraPosicaoAleatoria(ultimaPosicao) {
    let posicaoAleatoria = Math.round(Math.random() * ultimaPosicao);
    return posicaoAleatoria;
}