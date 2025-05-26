let x = true;
let y = false;

// OR
console.log(x || y || y); // retorna o valor quando achar o primeiro true não verifica as demais subexpressões
console.log(null || '' || 10 || 5 || y) // 10 é truthy, então retorna 10
console.log(null || '' || undefined || y || 0) // retorna o último valor falsy, que é 0

// AND
console.log(1 && undefined && x); // retorna o valor quando achar o primeiro false não verifica as demais subexpressões
console.log(10 && 1 && true && 'hello'); // retorna o último valor truthy, que é 'hello'

// NOT  
console.log(!x); // false
console.log(!'hello'); // false
console.log(!!'hello'); // true
