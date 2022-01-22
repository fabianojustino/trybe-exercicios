const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA= (acc, current)=> {
   let letter = current.toLowerCase();
   let ocorrencias = (letter.match(/a/g)).length; 
   return acc + ocorrencias;
  
}

console.log(names.reduce(containsA,0));