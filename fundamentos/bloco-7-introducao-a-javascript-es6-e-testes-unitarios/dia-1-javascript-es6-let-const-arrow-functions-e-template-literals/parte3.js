// IMPRIME FATORIAL DE UM NUMERO
const fatorial = (n) => {
  let number = n;

  for (let index = n - 1; index >= 1; index -= 1) {
    number *= index;
  }

  return number;
};

// console.log(`O fatorial de ${4} é ${fatorial(4)}`);

function fatorialTernario(n) {

console.log(n, 'n');

let res=0;

if (n == 1) {
    res = 1;
    console.log('1' ,'uma vez');
  } else {
    res= n * fatorialTernario(n - 1); // 2*1 retorno, res = 2
    console.log(n, 'n' , res, 'res');
  }
  
  return res;
}

 fatorialTernario(3);

//recursiva com operador ternario
const fator = number => number > 1 ? number * fator(number-1): 1 ;
// console.log(fator(4));

// Maior palavra de um texto
const maiorPalavra = (texto) => {
  const wordInParts = texto.split(" ");
  let max = wordInParts[0];

  for (const iterator of wordInParts) {
    if (iterator.length > max.length) {
      max = iterator;
    }
  }

  return max;
};

// console.log(maiorPalavra("o amor é lindo"));

