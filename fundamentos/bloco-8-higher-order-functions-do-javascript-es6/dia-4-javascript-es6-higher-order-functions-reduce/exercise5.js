const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA= (acc, current)=> {
   let letter = current.toLowerCase();
   let ocorrencias = (letter.match(/i/g) || []).length; // ou retorna um array com todas as ocorrencias ou um array vazio
   return acc + ocorrencias;
  
}

console.log(names.reduce(containsA,0));