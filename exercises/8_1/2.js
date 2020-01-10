const longestWord = frase => {
    const palavras = frase.split(' ')
    // let maiorPalavra = []
    maiorPalavra = [palavras[0]]
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > maiorPalavra[0].length) {
            // maiorPalavra = []
            // maiorPalavra.push(palavras[i])
            maiorPalavra = [palavras[i]]
        } else if (palavras[i].length === maiorPalavra[0].length) {
            maiorPalavra.push(palavras[i])
        }
    }
    return maiorPalavra
}

console.log(longestWord("A abelha asdfsadfadf é uma rainha"))