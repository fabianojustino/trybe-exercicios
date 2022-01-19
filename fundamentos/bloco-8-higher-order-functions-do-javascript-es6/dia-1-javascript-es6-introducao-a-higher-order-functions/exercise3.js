const RIGHT_ANSWERS =   ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "C", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const checkAnswers = (write, correct ) => {
  let soma = 0;

  for (const iterator in write) {
    if (write[iterator] === correct[iterator] && write[iterator] !== "N.A" ) {
      soma += 1;
    } else {
      soma -= 0.5;
    }
  }
  return soma;
};

const score = (write, correct, checkAnswers) => {
  let result = checkAnswers(write,correct);
  return ` A sua nota final foi: ${result}`;
};

console.log(score(STUDENT_ANSWERS,RIGHT_ANSWERS, checkAnswers));