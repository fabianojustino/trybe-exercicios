let n = 5;

//VARIOS ASTERISCO
for (let index = 0; index < n; index += 1) {
  // console.log("*****");
}

//console.log("\n");

//TRIANGULO RETANGULO
let asterisco = "*";
for (let index = 0; index < n; index += 1) {
   //console.log(asterisco);
  asterisco += "*";
}



//TRIANGUL RETANGULO INVERSO
let caractere = "*";
let espaco = "";

for (let index = n; index >= 1; index -= 1) {
  for (let x = 1; x < index; x += 1) {
    espaco += " ";
  }
  //console.log(espaco + caractere);
  espaco = "";
  caractere += "*";
}

//Forma do course
let tamanho = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = tamanho;

for (let lineIndex = 0; lineIndex < tamanho; lineIndex += 1) {

  for (let columnIndex = 1; columnIndex<= tamanho; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + '-';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  //console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};




let num = 5;
let marca = '*';
let input = '';

let midOfMatrix = (num + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex =0; lineIndex < midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 1; columnIndex <= num; columnIndex += 1) {
    if (columnIndex >= controlLeft && columnIndex <= controlRight) {
      input = input + marca;
    } else {
      input = input + '-';
    }
  }
  //console.log(input);
  input = '';
  controlRight += 1;
  controlLeft -= 1
};



let numeric = 5;
let middle = (numeric + 1) / 2;
let left = middle;
let right = middle;
let print = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= numeric; col += 1) {
    if (col == left || col == right || line == middle) {
      outputLine += print;
    } else {
      outputLine += '-';
    }
  }
  left -= 1;
  right += 1;
  console.log(outputLine);
}


//Primo ou não

let number=5;
let cont=1;

for (let index = 2; index <= number ; index+=1){

  if(number%index==0){
    cont+=1;
  }

}

if(cont==2){
  //console.log("o número:", number , "é primo");
}else{
  //console.log("o número:", number , "não é primo");
}

