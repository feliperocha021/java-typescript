var str1 = 'hello world';
var str2 = "hello world";
var str3 = "hello\nworld ".concat(str1); // permite quebra de linha e usar a sintaxe literal ${}
var num = 12; // 12.0 number sempre é salvo como número flutuante
var pi = 3.14;
var isTrue = true;
var isFalse = false;
//  alguns valores não são booleanos, mas são convertidos para booleano
// 0, '', null, undefined, NaN são falsos e todos os outros são verdadeiros
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
var isGreater = 10 > 5; // true
console.log(isGreater);
