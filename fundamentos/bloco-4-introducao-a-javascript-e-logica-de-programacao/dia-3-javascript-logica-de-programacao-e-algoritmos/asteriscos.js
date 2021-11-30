n = 5;

//VARIOS ASTERISCO
for (let index = 0; index < n; index += 1) {
  // console.log("*****");
}

//console.log("\n");

//TRIANGULO RETANGULO
let asterisco = "*";
for (let index = 0; index < n; index += 1) {
  // console.log(asterisco);
  asterisco += "*";
}

let caractere = "*";
let espaco = "";

for (let index = 5; index >= 1; index -= 1) {
  for (let x = 1; x < index; x += 1) {
    espaco += " ";
  }

  console.log(espaco + caractere);

  espaco = "";
  caractere += "*";
}
