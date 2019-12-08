let arrayPixels = document.getElementsByTagName("td");
let corSelecionada = "black";

arrayPixels[0].style.backgroundColor = "black"
arrayPixels[0].style.border = "3px dashed yellow";

window.onload = function () {
  for (let i = 1; i < 4; i++) {
    arrayPixels[i].style.backgroundColor = geraCorAleatoria();
  }

}

for (let i = 0; i < 4; i++) {
  arrayPixels[i].addEventListener('click', function() {
    corSelecionada = getComputedStyle(this).backgroundColor;

    for (let j = 0; j < 4; j++) {
      arrayPixels[j].style.border = "3px solid black";
    }

    this.style.border = "3px dashed yellow";
  });
}

for (let i = 4; i < arrayPixels.length; i++) {
  arrayPixels[i].addEventListener('click', function() {
    this.style.backgroundColor = corSelecionada;
  });
}

let botaoLimparQuadro = document.getElementById("limpar-quadro");
let arrayPixelsQuadro = document.querySelectorAll("#quadro td");

botaoLimparQuadro.addEventListener('click', function() {
  for (let pixel of arrayPixelsQuadro) {
    pixel.style.backgroundColor = "white";
  }
});

let table = document.getElementsByTagName("table")[1];
let botaoGerarGitHub = document.getElementById("gerar-perfil-github");
let botaoAlterarNumero = document.getElementById("alterar-numero");
let botaoAlterarNumeroGitHub = document.getElementById("alterar-numero-github");

botaoGerarGitHub.addEventListener('click', function() {
  let valor = 5
  if (valor >= 5 && valor <= 50) {
    if (valor > 25) {
      alert("Isso pode levar alguns segundos... aguarde!");
    }

    table.innerHTML = "";
    let novaLinha = document.createElement("tr");
    novaLinha.innerHTML = "<td></td>"
    table.appendChild(novaLinha);

    for (let i = 1; i < valor; i++) {
      let linhasQuadroAtual = document.getElementsByTagName("tr");
      let linhaASerClonada = linhasQuadroAtual[1];
      let novaLinha = document.createElement("tr");
      
      novaLinha.innerHTML = linhaASerClonada.innerHTML;
      table.appendChild(novaLinha);

      for (let j = 1; j < linhasQuadroAtual.length; j++) {
        let novoElementoColuna = document.createElement("td");
        let linhaAtual = document.getElementsByTagName("tr")[j];
        linhaAtual.appendChild(novoElementoColuna);
      }
    }
    let novoArrayPixels = document.getElementsByTagName("td");

    for (let i = 4; i < novoArrayPixels.length; i++) {
      novoArrayPixels[i].addEventListener('click', function() {
        this.style.backgroundColor = corSelecionada;
      });
      botaoLimparQuadro.addEventListener('click', function() {
        novoArrayPixels[i].style.backgroundColor = "white";
      });
      geraPerfilGitHub();
    }
  } else {
    alert("Insira um valor entre 5 e 50 !");
  }
});

botaoAlterarNumero.addEventListener('click', function() {
  let valor = document.getElementsByTagName("input")[0].value;
  if (valor >= 5 && valor <= 50) {
    table.innerHTML = "";
    let novaLinha = document.createElement("tr");
    novaLinha.innerHTML = "<td></td>"
    table.appendChild(novaLinha);

    for (let i = 1; i < valor; i++) {
      let linhasQuadroAtual = document.getElementsByTagName("tr");
      let linhaASerClonada = linhasQuadroAtual[1];
      let novaLinha = document.createElement("tr");
      
      novaLinha.innerHTML = linhaASerClonada.innerHTML;
      table.appendChild(novaLinha);

      for (let j = 1; j < linhasQuadroAtual.length; j++) {
        let novoElementoColuna = document.createElement("td");
        let linhaAtual = document.getElementsByTagName("tr")[j];
        linhaAtual.appendChild(novoElementoColuna);
      }
    }
    let novoArrayPixels = document.getElementsByTagName("td");

    for (let i = 4; i < novoArrayPixels.length; i++) {
      novoArrayPixels[i].addEventListener('click', function() {
        this.style.backgroundColor = corSelecionada;
      });
      botaoLimparQuadro.addEventListener('click', function() {
        novoArrayPixels[i].style.backgroundColor = "white";
      });
    }
  } else {
    alert("Insira um valor entre 5 e 50 !");
  }
});

botaoAlterarNumeroGitHub.addEventListener('click', function() {
  let valor = document.getElementsByTagName("input")[0].value;
  if (valor >= 5 && valor <= 50) {
    if (valor > 25) {
      alert("Isso pode levar alguns segundos... aguarde!");
    }

    table.innerHTML = "";
    let novaLinha = document.createElement("tr");
    novaLinha.innerHTML = "<td></td>"
    table.appendChild(novaLinha);

    for (let i = 1; i < valor; i++) {
      let linhasQuadroAtual = document.getElementsByTagName("tr");
      let linhaASerClonada = linhasQuadroAtual[1];
      let novaLinha = document.createElement("tr");
      
      novaLinha.innerHTML = linhaASerClonada.innerHTML;
      table.appendChild(novaLinha);

      for (let j = 1; j < linhasQuadroAtual.length; j++) {
        let novoElementoColuna = document.createElement("td");
        let linhaAtual = document.getElementsByTagName("tr")[j];
        linhaAtual.appendChild(novoElementoColuna);
      }
    }
    let novoArrayPixels = document.getElementsByTagName("td");

    for (let i = 4; i < novoArrayPixels.length; i++) {
      novoArrayPixels[i].addEventListener('click', function() {
        this.style.backgroundColor = corSelecionada;
      });
      botaoLimparQuadro.addEventListener('click', function() {
        novoArrayPixels[i].style.backgroundColor = "white";
      });
      geraPerfilGitHub();
    }
  } else {
    alert("Insira um valor entre 5 e 50 !");
  }
});

function geraCorAleatoria() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  let corAleatoria = 'rgb(' + r.toString() + ', ' + g.toString() + ', ' + b.toString() + ')';
  return corAleatoria;
}

function geraPerfilGitHub() {
  let arrayLinhasQuadro = document.querySelectorAll("#quadro tr");
  let arrayCores = ["white", corSelecionada];

  for (let linha of arrayLinhasQuadro) {
    let arrayPixelsLinha = linha.children;

    for (let i = 0; i < (arrayPixelsLinha.length / 2); i++) {
      let cor = arrayCores[Math.round(Math.random())];
      arrayPixelsLinha[i].style.backgroundColor = cor;
      arrayPixelsLinha[arrayPixelsLinha.length - i - 1].style.backgroundColor = cor;
    }
  }
}