const ang1 = 60;

function xadrez(peca) {



    switch (peca.toLowerCase()) {
        case "rei":
            return "Se move em todas as direções, mas apenas uma casa por vez"
            break;
        case "dama":
            return (
            "pode movimentar-se em qualquer direção " +
            "em um único sentido na jogada e " +
            "em quantas casas quiser")
            break;
        case "torre":
            return ("movimenta quantas casas " +
           "queira na horizontal ou vertical, " +
            "porém em apenas um sentido por " +
            "jogada.")
            break;
        case "bispo":
            return ("Tem seu movimento mais "+ 
            "restrito, sendo possível apenas "+
            "pelas diagonais em um sentido por jogada")
            break;
        case "cavalo":
            return "Os cavalos se movem de" +
            "forma diferente das outras peças " +
            "andando duas casas em uma direção " +
            "e então se movendo mais uma casa " +
            "em um ângulo de 90 graus"
            break;
        case "peão":
            return "Eles andam para frente, " +
            "mas só capturam na diagonal. Peões " +
            "só podem se mover uma casa por "+
            "vez, exceto em seus primeiros "+
            "movimentos, quando podem andar "+
            "por duas casas."
            break;

        default:
            return "Não é uma peça de Xadrez"
            break;
    }

}

console.log(xadrez("peão"))
