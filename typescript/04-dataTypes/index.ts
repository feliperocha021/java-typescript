const str1 = 'hello world'
const str2 = "hello world"
const str3 = `hello
world ${str1}` // permite quebra de linha e usar a sintaxe literal ${}

let num = 12 // 12.0 number sempre é salvo como número flutuante
const pi = 3.14

let isTrue = true 
let isFalse = false
//  alguns valores não são booleanos, mas são convertidos para booleano
// 0, '', null, undefined, NaN são falsos e todos os outros são verdadeiros
console.log(Boolean('')) // false
console.log(Boolean(' ')) // true

let isGreater = 10 > 5 // true
console.log(isGreater)
export {}; // serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
