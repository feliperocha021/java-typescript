let counter = 0;

counter++;
counter += 1;
counter += 2;

counter--;
counter -= 1;
counter -= 2;

console.log(counter); // Output: 0
console.log(++counter); // Output: 1
console.log(counter++); // Output: 1
console.log(counter); // Output: 2

console.log(typeof 1);
console.log(typeof 'hello');
console.log(typeof true);
console.log(typeof null); // retorna "object", mas é um bug do JavaScript
console.log(typeof undefined);