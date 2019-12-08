let lista = document.getElementById("lista");
let itens = document.getElementsByTagName("li");
let input = document.getElementsByTagName('input')[0];
let botaoAdicionar = document.getElementById("adicionar");
let itemASerAdicionado;
let novoItem;

botaoAdicionar.addEventListener('click', function() {
    itemASerAdicionado = input.value;
    novoItem = document.createElement('li');
    novoItem.innerHTML = itemASerAdicionado;
    document.getElementById("lista").appendChild(novoItem);
    input.value = "";
    
    novoItem.addEventListener('click', function() {
        if (this.classList.contains("itemSelecionado")) {
            this.classList.remove("itemSelecionado");
        } else {
            for (let item of itens) {
                item.classList.remove("itemSelecionado");
            }

            this.classList.add("itemSelecionado");
        }
    });
    
    novoItem.addEventListener('dblclick', function() {
        if (this.classList.contains("itemCompleto")) {
            this.classList.remove("itemCompleto");
        } else {
            this.classList.add("itemCompleto");
        }
    });
 

//let textoItem = document.createTextNode("aaaaaaa");
//document.body.appendChild(novoItem);

});

//let itens = document.getElementsByTagName('li');
//for (let item of itens) {
//    item.addEventListener('click', function() {
//        console.log('deu certo');
//        this.style.background = '#87cefa';
//    })
//}

let botoes = document.getElementsByTagName('button');
for (let botao of botoes) {
    botao.addEventListener('mouseover', function() {
        this.style.cursor = "pointer";
        this.style.backgroundColor = "#0000cd"; //"#20b2aa";
    });
    botao.addEventListener('mouseout', function () {
        this.style.backgroundColor = "#000080";
    });
}

let botaoLimparLista = document.getElementById("limparLista");
let botaoLimparCompletos = document.getElementById("limparCompletos");
let botaoSalvarLista = document.getElementById("salvar-lista");
let botaoParaCima = document.getElementById("para-cima");
let botaoParaBaixo = document.getElementById("para-baixo");
let botaoExcluirItem = document.getElementById("excluir-item");

botaoLimparLista.addEventListener('click', function() {
    lista.innerHTML = "";
});

botaoLimparCompletos.addEventListener('click', function() {
    for (let i = itens.length - 1; i >= 0; i--) {
        if (itens[i].classList.contains("itemCompleto")) {
            itens[i].parentNode.removeChild(itens[i]);
        }
    }
    //if () {
      //  item.parentNode.removeChild(item);
    //}
});

botaoSalvarLista.addEventListener('click', function() {
    let conteudoLista = lista.innerHTML;
    localStorage.setItem('listaSalva', conteudoLista);
});

window.onload = function() {
    lista.innerHTML = localStorage.getItem('listaSalva');

    for (let item of itens) {
        item.classList.remove("itemSelecionado");

        item.addEventListener('click', function() {
            if (this.classList.contains("itemSelecionado")) {

                this.classList.remove("itemSelecionado");

            } else {

                for (let cadaItem of itens) {
                    cadaItem.classList.remove("itemSelecionado");
                }
        
                this.classList.add("itemSelecionado");
            }
        });

        item.addEventListener('dblclick', function() {
            if (this.classList.contains("itemCompleto")) {
                this.classList.remove("itemCompleto");
            } else {
                this.classList.add("itemCompleto");
            }
        });
    }
}

botaoParaCima.addEventListener('click', function() {
    for (let i = 0; i < itens.length; i++) {

        if (itens[i].classList.contains("itemSelecionado")) {
            let novoItemAnterior = document.createElement("li");
            let itemAnterior = itens[i].previousElementSibling;

            novoItemAnterior.innerText = itens[i].innerText;
            novoItemAnterior.classList.add("itemSelecionado");

            if (itens[i].classList.contains("itemCompleto")) {
                novoItemAnterior.classList.add("itemCompleto");
            }

            itens[i].parentNode.removeChild(itens[i]);

            if (i > 0) {
                itemAnterior.insertAdjacentElement('beforebegin', novoItemAnterior);
            } else {
                lista.insertAdjacentElement('beforeend', novoItemAnterior);
            }

            novoItemAnterior.addEventListener('click', function() {
                if (this.classList.contains("itemSelecionado")) {
                    this.classList.remove("itemSelecionado");
                } else {
                    for (let item of itens) {
                        item.classList.remove("itemSelecionado");
                    }
        
                    this.classList.add("itemSelecionado");
                }
            });
            
            novoItemAnterior.addEventListener('dblclick', function() {
                if (this.classList.contains("itemCompleto")) {
                    this.classList.remove("itemCompleto");
                } else {
                    this.classList.add("itemCompleto");
                }
            });

            // itens[i].parentNode.removeChild(itens[i]);
            // itens[i-1] = itens[i];
            // itens[i] = novoItemAtual;
            // lista.children = itens;
            // console.log(lista.children);

            break;
        }
    }
});

botaoParaBaixo.addEventListener('click', function() {
    for (let i = 0; i < itens.length; i++) {

        if (itens[i].classList.contains("itemSelecionado")) {
            let novoItemPosterior = document.createElement("li");
            let itemPosterior = itens[i].nextElementSibling;

            novoItemPosterior.innerText = itens[i].innerText;
            novoItemPosterior.classList.add("itemSelecionado");

            if (itens[i].classList.contains("itemCompleto")) {
                novoItemPosterior.classList.add("itemCompleto");
            }

            itens[i].parentNode.removeChild(itens[i]);

            if (i < itens.length) {
                itemPosterior.insertAdjacentElement('afterend', novoItemPosterior);
            } else {
                lista.insertAdjacentElement('afterbegin', novoItemPosterior);
            }

            novoItemPosterior.addEventListener('click', function() {
                if (this.classList.contains("itemSelecionado")) {
                    this.classList.remove("itemSelecionado");
                } else {
                    for (let item of itens) {
                        item.classList.remove("itemSelecionado");
                    }
        
                    this.classList.add("itemSelecionado");
                }
            });
            
            novoItemPosterior.addEventListener('dblclick', function() {
                if (this.classList.contains("itemCompleto")) {
                    this.classList.remove("itemCompleto");
                } else {
                    this.classList.add("itemCompleto");
                }
            });

            break;
        }
    }
});

botaoExcluirItem.addEventListener('click', function() {
    for (let item of itens) {
        if (item.classList.contains("itemSelecionado")) {
            item.parentNode.removeChild(item);
            break;
        }
    }
});