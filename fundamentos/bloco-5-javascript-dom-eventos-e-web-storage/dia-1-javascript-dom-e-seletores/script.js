function setP(description){
let p =document.getElementsByTagName("p");
p[1].innerText =description;
}


function setBackroundColorDv(color){
  let divisoria =document.getElementsByClassName("main-content");
  divisoria[0].style.backgroundColor = color;
  
}

setBackroundColorDv("rgb(76,164,109");

let text= "Eu me vejo como um programador experiente," +
"participando de diversos projetos";
setP(text);