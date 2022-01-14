const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// FUNCTION BUBBLE SORT
const order = (array) => {
  let menor = "";

  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = index + 1; index2 < array.length; index2 += 1) {
      if (array[index2] < array[index]) {
        menor = array[index2];
        array[index2] = array[index];
        array[index] = menor;
      }
    }
  }

  return `Os números ${array} se encontram ordenados de forma crescente!`;
};

// console.log(order(oddsAndEvens)); // será necessário alterar essa linha 😉
// console.log(`Os números ${oddsAndEvens.sort().reverse()} se encontram ordenados de forma crescente!`);

var a = oddsAndEvens;
a.sort((a, b) => a - b);

console.log(`Os números ${a} se encontram ordenados de forma crescente!`);
