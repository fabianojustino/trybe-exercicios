function setP(description){

let p =document.getElementsByTagName("p");

p[1].innerText =description;

}

let text= "Eu me vejo como um programador experiente," +
"participando de diversos projetos";
setP(text);