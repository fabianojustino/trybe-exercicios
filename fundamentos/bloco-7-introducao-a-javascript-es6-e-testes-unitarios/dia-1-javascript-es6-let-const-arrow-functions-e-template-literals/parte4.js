const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {

    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}    Minhas cinco principais habilidades são:`;

    array.forEach(skill => result = `${result} - ${skill}` );

    result = `${result} #goTrybe `;

    return result;
}
//  console.log(buildSkillsPhrase("Lucas"));


// array.forEach(skill =>  console.log(skill))

let test = 'amigo'

array.forEach(function(value){
  test= `${test} - ${value}`

  console.log(test);
})

