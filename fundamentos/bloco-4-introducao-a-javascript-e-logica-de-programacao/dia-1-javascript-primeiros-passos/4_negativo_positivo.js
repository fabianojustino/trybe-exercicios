const a = -2;


function negativo_positivo(a, b, c) {
    if (a > 0) {
        return "positive";
    } else if (a < 0) {
        return "negative";
    } else {
        return "zero"
    }
}

console.log(negativo_positivo(a));
