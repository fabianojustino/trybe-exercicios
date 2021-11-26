const p= 70;

switch (true) {
    case p >=90 :
        console.log("A");        
        break;
    case p >=80 :
        console.log("B");        
        break;
    case p >=70:
        console.log("C");        
        break;
    case p >=60 :
        console.log("D");        
        break;
    case p >=50 :
        console.log("E");        
        break;
    case p <=50 && p>0:
        console.log("F");        
        break;
    case p <0 || p> 100:
        console.log("Erro, informe uma porcentagem maior que 0");        
        break;

    default:       
        break;
}

