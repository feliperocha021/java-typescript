// percorre cada elemento de um array e permite que execute uma função para cada elemento
// array.forEach(callback(elemento, index, array)) 
// o tipo de return é void

const numbers = [7, 2, 10, 4, 8, 3];

let square = [];
let evenNumbers = [];
numbers.forEach((el, index, arr) => {
    square.push(el * el);
})
console.log(square);

numbers.forEach((el) => {
    if(el % 2 === 0) {
        evenNumbers.push(el);
    }
})
console.log(evenNumbers);