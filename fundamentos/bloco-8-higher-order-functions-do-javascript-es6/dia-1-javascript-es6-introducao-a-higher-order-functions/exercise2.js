const sort = (number) => {
  const random = Math.floor(Math.random() * 5) + 1;

  return random;
};

const loteria = (numberChoice, sort) => {
  const result = sort(numberChoice);
  let msg = "";

  if (result === numberChoice) {
    msg = `Parabéns, o seu número: ${numberChoice} foi o sorteado `;
  } else {
    msg = "Tente novamente !";
  }

  return msg;
};

console.log(loteria(5, sort));
