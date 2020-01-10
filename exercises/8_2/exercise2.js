const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // // escreva seu código aqui
  // const elementosComPonto = books.filter(item => item.author.name.indexOf('.') !== -1)
  // // console.log(elementosComPonto)

  const elementoCom3Pontos = books.find(item => item.author.name.split('.').length - 1 === 3)
  // console.log(elementosCom3Pontos)

  return elementoCom3Pontos.name

  // const tem3PontosDadoQueTemPonto = nomesComPonto => nomesComPonto.find(nomeComPonto => nomeComPonto.length === 3)
  // const temPonto = name => name.filter(letra => letra === '.')
  // const tem3Pontos = books.find(item => item.author. )
  // const resultado = books.find(item => item.author.name.filter(letra => letra === '.').length === 3)
  // return resultado

//   const arrayPontos = books[0].author.name.filter(letra => letra === '.')
//   if (arrayPontos.length === 3) { return true}
}

assert.deepEqual(authorWith3DotsOnName(), expected_result);

// authorWith3DotsOnName()
