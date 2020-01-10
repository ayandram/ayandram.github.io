const fatorial = N => {
    let resultado = 1;
    for (let i = 2; i <= N; i++) {
        resultado *= i
    }
    return resultado
}

const fatorialRecursiva = N => (N > 1 ? N * fatorialRecursiva(N - 1) : 1)

console.log(fatorial(5))
