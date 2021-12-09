const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const weekDaysList = document.querySelector('.week-days');
createDaysOfTheWeek(weekDaysList, weekDays);



function createDaysOfTheWeek(element, arrayDays, classe) {

  for (let index = 0; index < arrayDays.length; index += 1) {
    const days = arrayDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
 
    element.appendChild(dayListItem);
  };
};










// Escreva seu código abaixo.