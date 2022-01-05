let today = moment().format('DD-MM-YYYY');

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

// set data
const inicio = document.getElementById("inicio");
inicio.DatePickerX.init();

let data = new Date();
const dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
inicio.DatePickerX.setValue(dataFormatada , false);


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

function removeKids(element) {
  while (element.firstElementChild) {
    element.removeChild(element.firstElementChild);
  }

  
}

function writeValues(matriz, element) {


 
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

  // CPF
  if (cpf.value === "") {
    wrongList.push({ cpf: cpf.value });
  } else {
    correctList.push({ cpf: cpf.value });
  }

  // DATA DE INICIO
  date = inicio.value.split('/'); 
  let day = date[0];
  let month = date[1];
  let year = date[2];
 
  if (day > 0 && day < 31 && month > 0 && month < 12 && year > 0) {
    correctList.push({  'data de inicio': inicio.value});  
  
  } else {
    wrongList.push({ 'data de inicio': inicio.value }); 
  }


  if (correctList.length > 0) {
    removeKids(answers);
    writeValues(correctList, answers);
    
  }

  if (wrongList.length > 0) {
    removeKids(wrongs);
    writeValues(wrongList, wrongs);    
  }
}

submit.addEventListener("click", sendForm);






// let brasilTetra = moment('17071994','DDMMYYY');
// let fromNow = brasilTetra.fromNow();

// console.log(fromNow);
