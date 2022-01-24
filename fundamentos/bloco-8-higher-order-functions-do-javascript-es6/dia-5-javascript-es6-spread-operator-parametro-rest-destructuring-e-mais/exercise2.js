// escreva sum abaixo

const numbers = [1,2,3,4];

const sum = (...nums) => nums.reduce(((acc, currentValue)=> acc + currentValue),0)

console.log(sum(...numbers))