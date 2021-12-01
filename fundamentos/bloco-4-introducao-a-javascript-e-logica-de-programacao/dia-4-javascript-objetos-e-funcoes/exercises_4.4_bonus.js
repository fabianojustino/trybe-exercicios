
//exercise 1
function palindromo(word){
  let compareWord="";
  for (let index = word.length -1; index >=0; index-=1) {
    compareWord+= word[index];       
  }
  return compareWord === word;
}
console.log(palindromo("arara"));
