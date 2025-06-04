// formas de definir um array
let a = new Array();
let b = [];

let students = ['jhon', 28, 'male', {name: 'mark', age: 30}];
console.log(students);
console.log(students[0]);

students[3].name = 'karol'
console.log(students[3])

students.push(true);
console.log(students[students.length - 1]);

let numbers = new Array(10); // cria um array de tamanho 10
console.log(numbers);