const fatorial = (n) => {
  let valor = n;

  for (let index = n - 1; index >= 1; index -= 1) {
    valor *= index;
  }

  return valor;
};

console.log(fatorial(4));