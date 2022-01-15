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


module.exports = { sum, myRemove };
