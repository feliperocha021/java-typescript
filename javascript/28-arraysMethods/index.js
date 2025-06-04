// LENGTH
let names = ['john', 'mark', 'merry'];
console.log(names.length)

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.length = 2;
console.log(numbers);
numbers.length = 5;
console.log(numbers);
// clear array
numbers.length = 0;
console.log(numbers);

//PUSH - adiciona 1 ou mais no final
names.push('ravi');
console.log(names);

//POP - remove no final e retorna 
let removed = names.pop();
console.log(removed);

//UNSHIFT - adiciona 1 ou mais no inicio
names.unshift('jonas', 'pedro'); 
/* 
[
    "jonas",
    "pedro",
    "john",
    "mark",
    "merry"
]  
*/
console.log(names);

// SHIFT - remove no inicio e retorna 
removed = names.shift();
console.log(removed);

//INDEXOF - retorna um indice de um elemento, se não achar retorna -1
index = names.indexOf('pedro');
console.log(index);