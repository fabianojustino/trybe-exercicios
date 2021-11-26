const a = 2;
const b = 5;
const c = 4;


function maior_3(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(maior_3(a, b, c))
