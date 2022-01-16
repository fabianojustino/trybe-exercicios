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

const myFizzBuzz = (num) => {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
};

function encode(msg) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let msgCodificada = "";

  for (const key of msg) {
    if (code[key] == undefined) {
      msgCodificada += key;
    } else {
      msgCodificada += code[key];
    }
  }

  return msgCodificada;
}

function decode(msg) {
  let code = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };

  let msgDecodificada = "";

  for (const key of msg) {
    if (code[key] == undefined) {
      msgDecodificada += key;
    } else {
      msgDecodificada += code[key];
    }
  }

  return msgDecodificada;
}


const techList = (lista, name) => {
  let listHighTech = [];
  const ordena = lista.sort();

  if (!lista.length > 0) {
    return "Vazio!";
  } else {
    for (const valor of ordena) {
      listHighTech.push({
        tech: valor,
        name: name,
      });
    }

    return listHighTech;
  }
};



// Desafio 13
function hydrate(frase) {
  let intOfFrase = frase.replace(/[^0-9]/g, '').trim();

  let copo = 0;

  for (const iterator of frase) {
   if(! isNaN(iterator) && iterator != ' '){
     copo+=(parseInt(iterator));
   }    
  } 
   
  if (copo > 1) {
    return copo + ' ' + 'copos de água';
  } else {
    return '1 copo de água';
  }
}
console.log(hydrate('1 cerveja e 2 cervejas e 3 coca-colas'));

module.exports = { sum, myRemove, myFizzBuzz, encode, decode,techList, hydrate };
