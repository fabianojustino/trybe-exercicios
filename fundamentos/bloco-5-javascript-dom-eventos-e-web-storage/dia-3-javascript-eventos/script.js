
//PARTE 1
const weekDays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const weekDaysList = document.querySelector(".week-days");
createDaysOfTheWeek(weekDaysList, weekDays);

//PARTE 2
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const days = document.querySelector("#days");
createDaysOfTheWeek(days, dezDaysList, "day");



function createDaysOfTheWeek(element, arrayDays, classe) {
  for (let index = 0; index < arrayDays.length; index += 1) {
    const day = arrayDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = day;

    //DEFINI UMA CLASSE SE SOLICITADO
    if (typeof classe !== undefined) {addClassElement(dayListItem, classe)}

    //checkHolidays(dayListItem)
    //checkFridays(dayListItem)

    element.appendChild(dayListItem);
  }
}

function addClassElement(element, classe) {
  element.classList.add(classe);
}

function checkHolidays(element){
console.log(element.target.value
  
  
  
  
  )

 addClassElement(element, 'holiday')

}
function checkFridays(element){

}

// Escreva seu código abaixo.
