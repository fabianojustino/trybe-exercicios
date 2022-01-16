const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  } else {
    return a + b;
  }
};

const myRemove = (array, item) => {
  const position = array.indexOf(item);

  position >= 0 ? array.splice(array.indexOf(item), 1) : "";

  return array;
};


const myFizzBuzz=(num)=> {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui


module.exports = { sum, myRemove, myFizzBuzz };
