let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let infoTioPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain",
  nota: "Dell's Four Color Comics #178",
  recorrente: "Sim",
};

//console.log( "Bem vinda, "+ info.personagem)

info["recorrente"] = "Sim";

//console.table(info);

for (const key in info) {
  //console.log(key);
  //console.log(info[key]);
}

//console.table(infoTioPatinhas)

for (const key in info) {
  if (key === "recorrente") {
    if (info[key] === "Sim" && infoTioPatinhas[key] === "Sim") {
      //console.log("Ambos recorrentes");
    } else {
      //console.log(info[key] + " e " + infoTioPatinhas[key]);
    }
  } else {
    //console.log(info[key] + " e " + infoTioPatinhas[key]);
  }
}

// EXERCICIO 6

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log("O livro favorito de " + leitor.nome + " " +
 leitor.sobrenome + " se chama: " + leitor.livrosFavoritos[0]["titulo"]);
