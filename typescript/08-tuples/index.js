"use strict";

//Tuplas é uma coleção ordenada de comprimento fixo onde cada elemento pode ter um tipo diferente
let employee = [1, 'Lucas', 2300, true];
employee = [2, 'Lucas', 2300, false]; //Reatribuição de valores
console.log(employee);
//Exceção em relação ao metódo push que aumenta o tamanho da tupla
employee.push(100);
console.log(employee);
exports.default = undefined;
// serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
