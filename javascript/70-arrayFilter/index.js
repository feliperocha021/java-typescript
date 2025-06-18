// usado para filtrar elementos de array com base em uma condição
// se a condição for verdadeira o elemento atual é armazenado no novo array
// o array original não é modificado
// pode usar o filter em outro filter aplicando um novo filter ao resultado do filter anterior
// newArray = arrayAtual.filter(callback(elemento, index, arrayAtual))
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const words = ['apple', 'banana', 'cherry', 'date', 'elden'];
const products = [
    {id: 1, name: 'shirt', price: 20, discount: 10},
    {id: 2, name: 'haat', price: 10, discount: 5},
    {id: 3, name: 'T-shirt', price: 30, discount: 10}
]

let newNumbers = numbers.filter((num, index, numbers) => {
    return num % 2 == 0;
}).filter((num) => {
    return num % 4 === 0;
})
console.log(newNumbers);

// esses exemplos eu usei a sintaxe mais simplificada de uma arrow function
let newWords = words.filter(word => word.length > 5);
console.log(newWords);

let newProducts = products.filter(prod => prod.price > 10);
console.log(newProducts);