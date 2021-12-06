function setP(description){
let p =document.getElementsByTagName("p");
p[1].innerText =description;
}
let text= "Eu me vejo como um programador experiente," +
"participando de diversos projetos";
setP(text);

function setBackroundColorDv(color){
  let divisoria =document.getElementsByClassName("main-content");
  divisoria[0].style.backgroundColor = color;
  
}
setBackroundColorDv("rgb(76,164,109");


function setBackroundColorCenter(color){
  let divisoria =document.getElementsByClassName("center-content");
  divisoria[0].style.backgroundColor = color;
  
}
setBackroundColorCenter("white");


function changeText(tag, texto){
  document.getElementsByTagName(tag)[0].innerText = texto;  
}

changeText("h1", "Exercício 5.1 - Java Script")

function upperCase(){
  let paragrafos = document.getElementsByTagName("p");

  for (const key in paragrafos) {
   let textoUpper = paragrafos[key].innerText;
    paragrafos[key].innerText= textoUpper.toUpperCase();
  }
}
upperCase();


