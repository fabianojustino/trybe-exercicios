const ang1 = 60;
const ang2 = 60;
const ang3 = -3;


function triangulo(a, b, c) {
    if (a + b + c == 180) {
        return true;
    } else if (ang1<0 || ang2<0 || ang3<0) {
        return false;
    } else {
        return "Não é um triângulo";
    }
}

console.log(triangulo(ang1, ang2, ang3))
