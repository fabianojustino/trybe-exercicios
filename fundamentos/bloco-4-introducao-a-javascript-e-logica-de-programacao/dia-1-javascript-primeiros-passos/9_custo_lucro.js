const custo= 2;
const venda= 4;

let custoTotal, lucro;
custoTotal= (custo*1.2);
lucro= venda-custoTotal;


if(custo<0 || venda<0){
  console.log("Erro, verifique os valores e tente novamente ! ");
}else{
  console.log("O lucro ao vender 1000 peças será de: R$ " + lucro * 1000);
}
