// Desafio 11

function generatePhoneNumber(array) {
  let resultado;
  let numeros = array;


  if (array.length !== 11) {
    resultado = 'Array com tamanho incorreto.';

  } else if (Math.max(...numeros) > 9 || Math.min(...numeros) < 0) {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let contador = 0;
    let numerosRepetidos = 0;

    for (let numeroDoArray = 0; numeroDoArray < numeros.length; numeroDoArray += 1) {
      let numeroVerificador = numeros[numeroDoArray];
      
      for (let index = 0; index < numeros.length; index++) {
        if (numeroVerificador === numeros[index]) {
          
          contador += 1;
        }
      }

      if (contador > numerosRepetidos) {// Desafio 11

        function generatePhoneNumber(array) {
          let resultado;
          let numeros = array;
        
        
          if (array.length !== 11) {
            resultado = 'Array com tamanho incorreto.';
        
          } else if (Math.max(...numeros) > 9 || Math.min(...numeros) < 0) {
            resultado = 'não é possível gerar um número de telefone com esses valores';
          } else {
            let contador = 0;
            let numerosRepetidos = 0;
        
            for (let numeroDoArray = 0; numeroDoArray < numeros.length; numeroDoArray += 1) {
              let numeroVerificador = numeros[numeroDoArray];
              
              for (let index = 0; index < numeros.length; index++) {
                if (numeroVerificador === numeros[index]) {
                  
                  contador += 1;
                }
              }
        
              if (contador > numerosRepetidos) {
                numerosRepetidos = contador;
              }
              contador = 0;
            }
        
            if (numerosRepetidos >= 3) {
              resultado = 'não é possível gerar um número de telefone com esses valores';
            } else {
            
              let telefone = numeros.join('');
        
              resultado = `(${telefone.slice(0, 2)
              })`
                + ` ${telefone.slice(2, 7)
                }-${
                  telefone.slice(7, 11)}`;
            }
          }
        
          return resultado;
        }
        
        // Desafio 12
        function triangleCheck(linha1, linha2, linha3) {// Desafio 11

function generatePhoneNumber(array) {
  let resultado;
  let numeros = array;


  if (array.length !== 11) {
    resultado = 'Array com tamanho incorreto.';

  } else if (Math.max(...numeros) > 9 || Math.min(...numeros) < 0) {
    resultado = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let contador = 0;
    let numerosRepetidos = 0;

    for (let numeroDoArray = 0; numeroDoArray < numeros.length; numeroDoArray += 1) {
      let numeroVerificador = numeros[numeroDoArray];
      
      for (let index = 0; index < numeros.length; index++) {
        if (numeroVerificador === numeros[index]) {
          
          contador += 1;
        }
      }

      if (contador > numerosRepetidos) {
        numerosRepetidos = contador;
      }
      contador = 0;
    }

    if (numerosRepetidos >= 3) {
      resultado = 'não é possível gerar um número de telefone com esses valores';
    } else {
    
      let telefone = numeros.join('');

      resultado = `(${telefone.slice(0, 2)
      })`
        + ` ${telefone.slice(2, 7)
        }-${
          telefone.slice(7, 11)}`;
    }
  }

  return resultado;
}

// Desafio 12
function triangleCheck(linha1, linha2, linha3) {
  if (linha1 < linha2 + linha3 && linha1 > Math.abs(linha2 - linha3)) {
    return true;
  }
  return false;
}
          if (linha1 < linha2 + linha3 && linha1 > Math.abs(linha2 - linha3)) {
            return true;
          }
          return false;
        }
        numerosRepetidos = contador;
      }
      contador = 0;
    }

    if (numerosRepetidos >= 3) {
      resultado = 'não é possível gerar um número de telefone com esses valores';
    } else {
    
      let telefone = numeros.join('');

      resultado = `(${telefone.slice(0, 2)
      })`
        + ` ${telefone.slice(2, 7)
        }-${
          telefone.slice(7, 11)}`;
    }
  }

  return resultado;
}

// Desafio 12
function triangleCheck(linha1, linha2, linha3) {
  if (linha1 < linha2 + linha3 && linha1 > Math.abs(linha2 - linha3)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {

  let numerosArray = string.match(/\d+/g).map(Number);
  let coposDeAgua = 0;
  let plural = [];

  for (let index = 0; index < numerosArray.length; index++) {
    if (typeof numerosArray[index] === 'number') {
      coposDeAgua += numerosArray[index];
    }
  }

  if (coposDeAgua > 1) {
    plural = ' copos de água';
  } else {
    plural = ' copo de água';
  }
  
  let resposta = [coposDeAgua, plural];
  return resposta.join('');
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
