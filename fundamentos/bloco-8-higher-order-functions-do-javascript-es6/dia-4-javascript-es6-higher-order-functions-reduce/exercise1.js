const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten= (acc, array)=> acc.concat(array);
console.log(arrays.reduce(flatten, []));

