const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const media = (acc, current) =>  acc + current ;

const studentAverage = (estudantes, notas) => {
  return estudantes.map((student, index) => ({
    name: student,
    average: (notas[index].reduce(media, 0)) / notas[index].length ,
  }));
};

console.log(studentAverage(students, grades));
