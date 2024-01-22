let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista2 = ['Talher', 'Liquidificador', 'Forno'];

// Transformar Array em String
console.log(lista.toString());

// Transformar em uma String separada pelo item divisor
console.log(lista.join('-'));

// Retorna a posição do item procurado na Array (Caso não encontre, retorna -1)
console.log(lista.indexOf('Farinha'));

// Remove o Último item da Lista
console.log(lista.pop());
console.log(lista);

// Remove o Primeiro Item da Lista
console.log(lista.shift());
console.log(lista);

// Adicionar Itens
lista.push('Prato');
console.log(lista);

// Remove item da Array
lista.splice(1, 1);
console.log(lista);

// Concatenar Listas
console.log(lista.concat(lista2));

// Ordenar Listas
console.log(lista.sort());

// Recerter ordem de Listas
console.log(lista.reverse());

lista = [45, 4, 9, 16, 25];

// Manipilar valores dentro de um Array
console.log(lista.map((item) => {
    return item * 2;
}));

// Filtrar valores por meio de função
console.log(lista.filter((item) => {
    return item % 2 == 0 ? true : false;
}))

// Testar se todos os valores de uma Array satisfazem alguma condição
console.log(lista.every((item) => {
    return item > 20 ? true : false;
}))

// Testar se algum valor de uma Array satisfaz alguma condição
console.log(lista.some((item) => {
    return item > 20 ? true : false;
}))

// Retorna o primeiro item que satisfaz a condição da função
console.log(lista.find((item) => {
    return item == 16 ? true : false;
}))

// Retorna o index do primeiro item que satisfaz a condição da função
console.log(lista.findIndex((item) => {
    return item == 16 ? true : false;
}))