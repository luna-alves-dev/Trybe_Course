// Desafio 1
function compareTrue(item1, item2) {
  if (item1 === true && item2 === true) {
    return true;
  }
  if (item1 === false && item2 === false) {
    return false;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;
  return triangulo;
}

// Desafio 3
function splitSentence(name) {
  let array = name.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  let resultado = `${ultimoNome}, ${primeiroNome}`;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
// Este outro loop for/in foi para verificar quantas vezes o(s) número(s) maiores se repetiram.
// Esse primeiro loop for/in foi usado parra percorrer todo o array e encontrar os maiores números.
function highestCount(arrNumbers) {
  let maxNumbers = arrNumbers[0];
  let repeatCounter = 0;

  for (let index in arrNumbers) {
    if (arrNumbers[index] > maxNumbers) {
      maxNumbers = arrNumbers[index];
    }
  }

  for (let index in arrNumbers) {
    if (arrNumbers[index] === maxNumbers) {
      repeatCounter += 1;
    }
  }
  return repeatCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1); // A função Math.abs(x) retorna o valor absoluto de um número "x",
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position > cat2Position) {
    return 'cat2';
  }
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultadoFizzBuzz = [];

  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      resultadoFizzBuzz.push('fizzBuzz');
    } else if (numeros[index] % 5 === 0) {
      resultadoFizzBuzz.push('buzz');
    } else if (numeros[index] % 3 === 0) {
      resultadoFizzBuzz.push('fizz');
    } else {
      resultadoFizzBuzz.push('bug!');
    }
  }

  return resultadoFizzBuzz;
}

// Desafio 9
function encode(stringEncode) {
  let encode = '';

  for (let index = 0; index < stringEncode.length; index += 1) {
    switch (true) {
    case stringEncode[index] === 'a': 
    encode += '1';
      break;
    case stringEncode[index] === 'e':
      encode += '2';
      break;
    case stringEncode[index] === 'i':
      encode += '3';
      break;
    case stringEncode[index] === 'o':
      encode += '4';
      break;
    case stringEncode[index] === 'u':
      encode += '5';
      break;
    default:
      encode += stringEncode[index];
    }
  }
  return encode;
}

// Multi-Caso - Operações encadeadas.

function decode(stringDecode) {
  let decode = '';
  for (let index = 0; index < stringDecode.length; index += 1) {
    switch (true) {
    case stringDecode[index] === '1':
      decode += 'a';
      break;
    case stringDecode[index] === '2':
      decode += 'e';
      break;
    case stringDecode[index] === '3':
      decode += 'i';
      break;
    case stringDecode[index] === '4':
      decode += 'o';
      break;
    case stringDecode[index] === '5':
      decode += 'u';
      break;
    default:
      decode += stringDecode[index];
    }
  }
  return decode;
}

// Desafio 10
function techList(tech, name) {
  let listaTecnol = [];
  tech.sort();

  for (let index = 0; index < tech.length; index += 1) {
    listaTecnol.push({
      tech: tech[index],
      name,
    });
  }

  if (listaTecnol.length === 0) {
    return 'Vazio!';
  }

  return listaTecnol;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
