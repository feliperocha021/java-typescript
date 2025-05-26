let x = 10;
let y = 5;

console.log('Addition:', x + y);
console.log('Subtraction:', x - y);
console.log('Multiplication:', x * y);
console.log('Division:', x / y);
console.log('Modulus:', x % y);
console.log('Exponentiation:', x ** y); 
console.log('Increment:', ++x);
console.log('Decrement:', --y);
console.log('Combined Addition and Assignment:', x += y);
console.log('Combined Subtraction and Assignment:', x -= y);
console.log('Combined Multiplication and Assignment:', x *= y); 
console.log('Combined Division and Assignment:', x /= y);
console.log('Combined Modulus and Assignment:', x %= y);
console.log('Combined Exponentiation and Assignment:', x **= y);

console.log('10' + 5); // 105 (string concatenation)
console.log(5 + '10'); // 510 (string concatenation)
console.log('10' - 5); // 5 (string converted to number)
console.log(2 + true); // 3 (true is converted to 1)
console.log(2 + false); // 2 (false is converted to 0)
console.log(2 + 3 + 'hello'); // 5hello (addition before string concatenation)
console.log('hello' + 2 + 3); // hello23 (string concatenation before addition)