const SELECT_ESTADO = document.querySelector("#estado");
const ARRAY_ESTADOS = [
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

function fillStates(states) {
 
  for (let index = 0; index < states.length; index += 1) {
    const valueState = states[index].split(',');
    const sigla = valueState[0].trim()
    const estado = valueState[1].trim()

    const option = document.createElement("option");
    option.value = sigla;
    option.text = estado;

    if(sigla === 'SP'){
      option.selected = true;
    }

    SELECT_ESTADO.appendChild(option);

  }
}

fillStates(ARRAY_ESTADOS)