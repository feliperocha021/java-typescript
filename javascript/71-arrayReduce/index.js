// retorna um unico valor e não um novo array
// o array original não é modificado
// result = array.reduce(callback(acumulador, elemento, index, array), valorInicial)
// o acumulador recebe o valor do acumulador anterior a cada iteração, sendo que o valor inical do acumulaador é defino nos parâmetros da função
// caso não defina o valor inical ele será o primeiro elemento do array
const numbers = [7, 2, 10, 4, 8, 3];
let sum = numbers.reduce((acc, elem, index, numbers) => {
    console.log(acc, elem, index, numbers);
    return acc + elem;
}, 0)
console.log(sum);

let max = numbers.reduce((acc, elem) => {
    return Math.max(acc, elem);
})
console.log(max);