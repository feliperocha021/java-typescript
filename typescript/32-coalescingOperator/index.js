"use strict";
// nullish coalescing operator(??) é um operador que retorna o lado direito se o esquerdo for null ou undefined

var value = null;
var value2 = undefined;
var value3 = ''; // se quisermos retorna a string vazia não será porssível pq ela é false e o || retorna o último false ou o primeiro true
var x = value || 'DEFAULT';
var y = value2 || 'DEFAULT';
var z = value3 || 'DEFAULT';
var a = value !== null && value !== void 0 ? value : 'DEFAULT';
var b = value2 !== null && value2 !== void 0 ? value2 : 'DEFAULT';
var c = value3 !== null && value3 !== void 0 ? value3 : 'DEFAULT'; // aqui já é possível retoorna a string vazia
console.log(x, y, z);
console.log(a, b, c);
