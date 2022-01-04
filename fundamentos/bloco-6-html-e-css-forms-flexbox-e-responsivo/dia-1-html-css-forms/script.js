const selected_estado = document.querySelector("#estado");
const array_estados = [
  "AC, Acre",
  "AL, Alagoas",
  "AP, Amapá",
  "AM, Amazonas",
  "BA, Bahia",
  "CE, Ceará",
  "DF, Distrito Federal",
  "ES, Espirito Santo",
  "GO, Goiás",
  "MA, Maranhão",
  "MS, Mato Grosso do Sul",
  "MT, Mato Grosso",
  "MG, Minas Gerais",
  "PA, Pará",
  "PB, Paraíba",
  "PR, Paraná",
  "PE, Pernambuco",
  "PI, Piauí",
  "RJ, Rio de Janeiro",
  "RN, Rio Grande do Norte",
  "RS, Rio Grande do Sul",
  "RO, Rondônia",
  "RR, Roraima",
  "SC, Santa Catarina",
  "SP, São Paulo",
  "SE, Sergipe",
  "TO, Tocantins",
];
const submit = document.querySelector("#submit");

// campos requeridos
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const endereco = document.getElementById("endereco");
const cidade = document.getElementById("cidade");

const answers = document.querySelector("#answers");
const wrongs = document.querySelector("#wrongs");

function fillStates(states) {
  for (let index = 0; index < states.length; index += 1) {
    const valueState = states[index].split(",");
    const sigla = valueState[0].trim();
    const estado = valueState[1].trim();

    const option = document.createElement("option");
    option.value = sigla;
    option.text = estado;

    if (sigla === "SP") {
      option.selected = true;
    }

    selected_estado.appendChild(option);
  }
}

fillStates(array_estados);

function sendForm(event) {
  event.preventDefault();
  checkEmptyFields();
}

function removeKids() {
  while (answers.firstElementChild) {
    answers.removeChild(answers.firstElementChild);
  }

  while (wrongs.firstElementChild) {
    wrongs.removeChild(wrongs.firstElementChild);
  }
}

function writeValues(matriz, element) {
  // removeKids();

  for (let index = 0; index < matriz.length; index++) {
    const key = Object.keys(matriz[index]);
    const value = Object.values(matriz[index]);

    const item = document.createElement("p");
    item.innerText = `${key} : ${value}`;
    element.appendChild(item);
  }
}

// VALIDA CAMPOS VAZIOS
function checkEmptyFields() {
  const correctList = [];
  const wrongList = [];

  // NOME
  if (nome.value === "" && nome.value.length < 4) {
    wrongList.push({ nome: nome.value });
  } else {
    correctList.push({ nome: nome.value });
  }

  // EMAIL
  if (email.value === "") {
    wrongList.push({ email: email.value });
  } else {
    correctList.push({ email: email.value });
  }

  if (cpf.value === "") {
    wrongList.push({ cpf: cpf.value });
  } else {
    correctList.push({ cpf: cpf.value });
  }

  if (correctList.length > 0) {
    writeValues(correctList, answers);
  }

  if (wrongList.length > 0) {
    writeValues(wrongList, wrongs);
  }
}

submit.addEventListener("click", sendForm);
