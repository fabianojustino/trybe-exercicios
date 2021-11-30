let fabiano = [2, 5, 6, 48, 59, 10];
let daniel = [2, 5, 36, 48, 59, 19];
let jose = [22, 35, 46, 48, 59, 10];

//array para receber os números sorteados
let loteria = [];

for (let index = 0; index < 6; index++) {
  let sorteado = Math.floor(Math.random() * 60) + 1;
  loteria.push(sorteado);
}

let countFabiano = 0;

for (let index = 0; index < loteria.length; index += 1) {
  //console.log("Mega sena: ", loteria[index]);

  for (let indexFabiano = 0; indexFabiano < loteria.length; indexFabiano++) {
    if (loteria[index] === fabiano[indexFabiano]) {
      //console.log("Acertou", fabiano[indexFabiano]);
      countFabiano += 1;
    }
  }
}

//console.log("Número de acertos", countFabiano);

let jogos = [fabiano, daniel, jose];

for (let jogo of jogos) {
  let cont = 0;

  for (let index = 0; index < jogo.length; index++) {
    console.log("mega sena: ", jogo[index]);

    for (let indexLoto = 0; indexLoto < loteria.length; indexLoto++) {
      if (loteria[index] == jogo[indexLoto]) {
        console.log("Acertou ", jogo[index]);
        cont += 1;
      }
    }
  }
  console.log("número de acertos", cont, "\n");
}
