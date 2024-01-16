function calcularImovel(m, q) {
    let m2 = 3000;

    if (q === 1) {
        return m * (m2 * 1);
    }
    if (q === 2) {
        return m * (m2 * 1.2);
    }
    if (q === 3) {
        return m * (m2 * 1.5);
    }
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);

console.log(`A casa custa R$ ${preco}`)