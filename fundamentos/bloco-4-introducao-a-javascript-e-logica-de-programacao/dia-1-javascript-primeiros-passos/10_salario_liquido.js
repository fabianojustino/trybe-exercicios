//ALIQUOTAS
const inss_8 = 0.08;
const inss_9 = 0.09;
const inss_11 = 0.11;
const inss_Max = 570.88;

//IR
const iRenda_7dot5 = 0.075;
const iRenda_15 = 0.15;
const iRenda_22dot5 = 0.225;
const iRenda_27dot5 = 0.275;
const iRenda_max = 869.36;

let sal = 3000.00;
//var desconto inss e desconto de Imposto de renda
let descInss, descIR;


//desconta INSS
switch (true) {
  case sal > 5189.82:
    descInss = sal - inss_Max;
    break;

  case sal <= 5189.82 && sal >= 2594.93:
    descInss = sal * inss_11;
    break;

  case sal <= 2594.92 && sal >= 1556.95:
    descInss = sal * inss_9;
    break;

  case sal <= 1556.94:
    descInss = sal * inss_8;
    break;

  default:
    break;
}

//salario menos a aliquota do inss
sal -= descInss;


//desconta Imposto de renda
switch (true) {
  case sal > 4664.68:
    descIR = (sal * iRenda_27dot5) - iRenda_max
    break;

  case sal <= 4664.68 && sal >= 3751.06:
    descIR = (sal * iRenda_22dot5) - 636.13
    break;

  case sal <= 3751.05 && sal >= 2826.66:
    descIR = descIR = (sal * iRenda_15) - 354.80
    break;

  case sal <= 2826.65 && sal >= 1903.99:
    descIR = descIR = (sal * iRenda_7dot5) - 142.80
    break;



  default:
    break;
}

sal -= descIR.toFixed(2);

console.log(sal);








