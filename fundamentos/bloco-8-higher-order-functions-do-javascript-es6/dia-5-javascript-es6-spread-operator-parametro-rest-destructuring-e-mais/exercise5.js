const myList = [1, 2, 3];

// Posso passar um array [] quanto um objeto {}, informando a quantidade de campos

const swap = ([a,b,c]) => [c,b,a];

console.log(swap(myList));