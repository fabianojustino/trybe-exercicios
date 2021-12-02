//exercise 1
function palindromo(word) {
  let compareWord = "";
  for (let index = word.length - 1; index >= 0; index -= 1) {
    compareWord += word[index];
  }
  return compareWord === word;
}
//console.log(palindromo("arara"));

//exercise 2
function menor(numeros) {
  let indice = 0;
  let maior=numeros[0];

  for (let key in numeros) {  
    if(numeros[key]> maior){
      maior= numeros[key];
      indice= key;
    } 
}
return indice;
}
// let result = maior([2, 3, 26, 8, 17, 56]);
// console.log(result);



//exercise 3
function menor(numeros) {
  let indice = 0;
  let menor=numeros[0];

  for (let key in numeros) {  
    if(numeros[key]< menor){
      menor= numeros[key];
      indice= key;
    } 
}
return indice;
}

let result = menor([2, 4, 6, 7, 10, 0, -3]);
 console.log(result);