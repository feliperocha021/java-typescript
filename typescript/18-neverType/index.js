"use strict";
// never garante que umaa função nunca vai retornar um valor, ou seja, ela não vai terminar a execução normalmente.

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
function createError(msg, code) {
    throw (`Error ${code}: ${msg}`);
}
// No consoole o greetUser ainda retorna undefined, mas o createError nunca vai retornar um valor, pois sempre lança um erro.
console.log(greetUser("John"));
console.log(createError("Something went wrong", 500));
exports.default = undefined;
// serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
