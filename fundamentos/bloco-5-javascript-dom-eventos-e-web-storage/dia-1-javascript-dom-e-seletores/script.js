function setP(description){
let p = document.getElementsByTagName("p");
p[1].innerText =description;
}
let text= "Eu me vejo como um programador experiente," +
"participando de diversos projetos";
setP(text);

function setBackgroundColorDv(color){
  let divisoria =document.getElementsByClassName("main-content");
  divisoria[0].style.backgroundColor = color;
  
}
setBackgroundColorDv("rgb(76,164,109");


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
  let paragrafos = document.getElementsByTagName('p');

 for (let index = 0; index < paragrafos.length; index++) {
   paragrafos[index].innerText = paragrafos[index].innerText.toUpperCase();
   
 }
}
upperCase();

function printParagrafos(){
  let p= document.getElementsByTagName("p");
 
  for (let index = 0; index < p.length; index++) {
  console.log(p[index].innerText);    
  }  
 }

 printParagrafos();

/*
 let arrayAnimals = ["cavalo", "galinha", "gato"];

 let listAnimals = document.querySelector(".list-animals")   

 for (let index = 0; index < arrayAnimals.length; index++) {
  let li = document.createElement("li");
  let animal = arrayAnimals[index];
  li.innerText = animal;
  li.className="item-animal";

  listAnimals.appendChild(li)
   
 }

 //Apos preencher e definir uma classe para os novos itens, percorro para excluir um item
 let contentAnimals = document.querySelectorAll(".item-animal");

 for (let index = 0; index < contentAnimals.length; index++) {
 
  let texto = contentAnimals[index];

  if(texto.innerText.includes("gato")){
    //listAnimals.removeChild(texto)
  }

   
 }

 let dados = document.getElementById("text").lastElementChild.remove();
*/

