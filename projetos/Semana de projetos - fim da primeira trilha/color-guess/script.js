let bolas = document.getElementsByClassName("bola");
let mensagemDeResultado = document.getElementById("mensagem-de-resultado");
let placar = document.getElementById("placar");
let encontrouResposta = false;
let valorErros = 0;
let quantidadeAcertos = 0;

let botaoAlterarNumero = document.getElementById("alterar-numero");
let input = document.getElementsByTagName("input")[0];
let elementoPai = document.getElementById("conjunto-de-bolas");

let botaoReiniciar = document.getElementById("reiniciar");



window.onload = function() {
    let valorPlacarGuardado = sessionStorage.getItem('placar');
    let valorErrosGuardado = sessionStorage.getItem('erros');
    let valorAcertosGuardado = sessionStorage.getItem('acertos');
    let valorErrosTotalGuardado = sessionStorage.getItem('errosTotal');
    let valorAcertosTotalGuardado = sessionStorage.getItem('acertosTotal');
    let quantidadeAcertosGuardado = sessionStorage.getItem('quantidadeAcertos');
    let numeroBolasGuardado = sessionStorage.getItem('numeroBolas');
    console.log(numeroBolasGuardado)

    if (numeroBolasGuardado >= 3 && numeroBolasGuardado <= 9) {
        elementoPai.innerHTML = "";
    
        for (let i = 0; i < numeroBolasGuardado; i++) {
            let bola = document.createElement("div");
            bola.classList.add("bola");
            elementoPai.appendChild(bola);
        }
        let posicaoDaBolaCerta = pintaBolaDaResposta(numeroBolasGuardado - 1);
        pintaAsOutrasBolas(posicaoDaBolaCerta);
    } else {
        let posicaoDaBolaCerta = pintaBolaDaResposta(5);
        pintaAsOutrasBolas(posicaoDaBolaCerta);
    }

    // if (numeroBolasGuardado == undefined) {
    //     let numeroBolas = 6;
    // } else {
    //     let numeroBolas = parseInt(numeroBolasGuardado);
    // }

    if (valorPlacarGuardado == undefined) {
        valorPlacar = 0;
    } else {
        valorPlacar = parseInt(valorPlacarGuardado);
    }
    if (valorErrosGuardado == undefined) {
        valorErrosAnterior = -2;
    } else {
        valorErrosAnterior = parseInt(valorErrosGuardado);
    }
    if (valorAcertosGuardado == undefined) {
        valorAcertos = 0;
    } else {
        valorAcertos = parseInt(valorAcertosGuardado);
    }
    if (valorErrosTotalGuardado == undefined) {
        valorErrosTotal = 0;
    } else {
        valorErrosTotal = parseInt(valorErrosTotalGuardado);
    }
    if (valorAcertosTotalGuardado == undefined) {
        valorAcertosTotal = 0;
    } else {
        valorAcertosTotal = parseInt(valorAcertosTotalGuardado);
    }
    if (quantidadeAcertosGuardado == undefined) {
        quantidadeAcertosAnterior = -2;
    } else {
        quantidadeAcertosAnterior = parseInt(quantidadeAcertosGuardado);
    }

    if (valorErrosTotal + valorAcertosTotal == 1) {
        valorAcertos = 0;
    } else {
        if (valorErrosAnterior == 0) {
            valorAcertos += 1;
        } else {
            valorAcertos = 0;
        }
    }

    placar.innerText = valorPlacar;
    //console.log(valorPlacar);
    // console.log(valorErros);
    // console.log(valorAcertos);
    // console.log(valorErrosAnterior);

    botaoAlterarNumero.addEventListener('click', function() {
        let numeroBolas = input.value;
        sessionStorage.setItem('numeroBolas', numeroBolas);

    
        if (numeroBolas >= 3 && numeroBolas <= 9) {
            elementoPai.innerHTML = "";
    
            for (let i = 0; i < numeroBolas; i++) {
                let bola = document.createElement("div");
                bola.classList.add("bola");
                elementoPai.appendChild(bola);
            }
            let posicaoDaBolaCerta = pintaBolaDaResposta(numeroBolas - 1);
            pintaAsOutrasBolas(posicaoDaBolaCerta);
        } else {
            alert("Digite um número entre 3 e 9 !");
        }
    
    });

    botaoReiniciar.addEventListener('click', function() {
        if (encontrouResposta) {
            sessionStorage.setItem('placar', valorPlacar);
            sessionStorage.setItem('erros', valorErros);
            sessionStorage.setItem('acertos', valorAcertos);
            sessionStorage.setItem('errosTotal', valorErrosTotal);
            sessionStorage.setItem('acertosTotal', valorAcertosTotal);
            sessionStorage.setItem('quantidadeAcertos', quantidadeAcertos);
    
            document.location.reload();
        } else {
            alert("Você tem que tentar até acertar!");
        }
    
    });


    // valorErrosTotal += valorErros;
    // valorAcertosTotal += valorAcertos;
}

function geraCorAleatoria() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let cor = "rgb("+r+", "+g+", "+b+")";
    return {nome: cor, rgb: [r, g, b]};
}

function escolheBolaDaResposta(numero) {
    let posicaoDaBola = Math.round(Math.random() * numero);

    bolas[posicaoDaBola].style.border = "5px solid black"; //LEMBRAR DE APAGAR ESSA LINHA

    bolas[posicaoDaBola].addEventListener('click', function() {
        if (! encontrouResposta) {
            mensagemDeResultado.innerText = "Correct!";
            encontrouResposta = true;
            valorAcertosTotal += 1

            if (valorAcertos > 0 && valorErros == 0) {
                valorPlacar += 4;
            } else {
                valorPlacar += 3;
            }

            placar.innerText = valorPlacar;
            sessionStorage.setItem('placar', valorPlacar);

        }
    })
    return posicaoDaBola;
}

function pintaBola(qualBola) {
    let qualCor = geraCorAleatoria();
    qualBola.style.backgroundColor = qualCor.nome;
    return qualCor.rgb;
}

function pintaBolaDaResposta(numero) {
    let textoRgb = document.getElementById("rgb");
    let posicao = escolheBolaDaResposta(numero);
    let qualBola = bolas[posicao];
    rgb = pintaBola(qualBola);
    textoRgb.innerHTML = "(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    return posicao;
}

function pintaAsOutrasBolas(posicaoDaBolaCerta) {
    for (let i = 0; i < bolas.length; i++) {
        if (i !== posicaoDaBolaCerta) {
            pintaBola(bolas[i]);

            bolas[i].addEventListener('click', function() {
                if (! encontrouResposta) {
                    mensagemDeResultado.innerText = "Wrong answer! Guess again!";
                    valorErros += 1;
                    valorErrosTotal += 1;
                    if (valorErros > 2) {
                        let pontos = valorPlacar - 2;
                        valorPlacar = Math.max(0, pontos);
                        placar.innerText = valorPlacar;
                    } else {
                        let pontos = valorPlacar -1;
                        valorPlacar = Math.max(0, pontos);
                        placar.innerText = valorPlacar;
                    }
                    sessionStorage.setItem('placar', valorPlacar);

                }
            });
        }        
    }
}