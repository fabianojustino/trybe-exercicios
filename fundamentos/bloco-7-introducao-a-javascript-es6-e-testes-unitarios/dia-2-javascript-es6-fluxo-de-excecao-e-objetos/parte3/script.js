const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// 1
const addLessons = (object, key, value) => {
  object[key] = value;
  /* console.log(object); */
};
addLessons(lesson2, "turno", "noite");

// 2
const showKeys = (object /* console.log(Object.keys(object)); */) =>
  showKeys(lesson3);

// 3
const showLenghtObject = (
  object /* console.log(Object.keys(object).length); */
) => showLenghtObject(lesson1);

// 4
const showValues = (object /*  console.log(Object.values(object)); */) =>
  showValues(lesson2);

// 5 e 6
const totalGrade = (object) => {
  const objValues = Object.keys(object);
  let total = 0;
  for (const key in objValues) {
    total += allLessons[objValues[key]]["numeroEstudantes"];
  }
  /* console.log(total); */
};

// 7
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
totalGrade(allLessons);
/* console.log( allLessons) */

const searchValue = (object, position) => {
  const value = Object.values(object);
  /*  console.log(value[position]); */
};
searchValue(lesson3, 1);

const searchKeyAndValue = (object, key, value) => {
  const array = Object.entries(object);

  for (const index in array) {
    if (array[index][0] === key && array[index][1] === value) {
      return true;
    }
  }
  return false;
};
/* console.log(searchKeyAndValue(lesson3,'materia','Matemdática')); */

const studentsMath = (object, subject) => {
  const values = Object.keys(object);
  let total = 0;

  console.log(object);

  for (const key in values) {
    if (object[values[key]].materia === subject) {
      total += object[values[key]].numeroEstudantes;
    }
  }

  return total;
};

/* console.log(studentsMath(allLessons, "Matemática")); */



const viewHistory= (object,teacher)=>{

const values = Object.values(object);
let total =0;
let degrees = [];

for (const key in values) {
  
  if(values[key].professor === teacher){
    total+= values[key].numeroEstudantes;
    degrees.push(values[key].materia);
  }
 
}

return degrees;


}

console.log(viewHistory(allLessons,'Maria Clara'))

