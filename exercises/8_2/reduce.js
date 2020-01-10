// CÓDIGO COM REDUCE:

// const resultadoReduce = array.reduce(funcaoPassadaComoParametro, valorInicial)

// CÓDIGO COM LOOP:

// let acumulado = valorInicial
// for (let i = 0; i < array.length; i++) {
//     acumulado = funcaoPassadaComoParametro(acumulado, array[i])
// }
// const resultadoLoop = acumulado


//FUNÇÕES DE EXEMPLO PARA COLOCAR NO LUGAR DE 'funcaoPassadaComoParametro':

function soma(elementoAcumulado, elementoAtualdoArray) { // Pode usar array = [0, 1, 2 , 3, 4]
    acumulado = elementoAcumulado + elementoAtualdoArray
    return acumulado
}

function concatena(elementoAcumulado, elementoAtualdoArray) { // Pode usar como exemplo array = ['A', 'B', 'C']
    acumulado = elementoAcumulado.concat(elementoAtualdoArray)
    return acumulado
}


// EXEMPLO 1

const array1 = [0, 1 ,2 ,3 ,4, 5]
// Código com reduce:

const resultadoComReduce1 = array1.reduce(soma, 0)
console.log(`Resultado do código com reduce do exemplo 1: ${resultadoComReduce1}`)

//Código com loop:
let acumulado1 = 0
for (let i = 0; i < array1.length; i++) {
    acumulado1 = soma(acumulado1, array1[i])
}
const resultadoComLoop1 = acumulado1
console.log(`Resultado do código com loop do exemplo 1: ${resultadoComLoop1}`)


// EXEMPLO 2

const array2 = ['A', 'B', 'C']

// Código com reduce:
const resultadoComReduce2 = array2.reduce(concatena, '')
console.log(`Resultado do código com reduce do exemplo 2: ${resultadoComReduce2}`)

//Código com loop:
let acumulado2 = ''
for (let i = 0; i < array2.length; i++) {
    acumulado2 = soma(acumulado2, array2[i])
}
const resultadoComLoop2 = acumulado2
console.log(`Resultado do código com loop do exemplo 2: ${resultadoComLoop2}`)