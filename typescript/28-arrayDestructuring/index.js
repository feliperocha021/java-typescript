"use strict";
// desestruturação permite descompactar arrays ou objetos em um monte de variáveis
//quando fazemos a desestruturação, o array original continua intacto
var person = ['John', 'Smith', 28];
var fname = person[0], lname = person[1], age = person[2];
console.log(fname, lname, age);
var nome = person[0], idade = person[2];
console.log(nome, idade);
var primeroNome = person[0], segundoNome = person[1];
console.log(primeroNome, segundoNome);
// agora caso algum valor seja opcional podemos definir um valor padrão para não receber undefined
var pnome = person[0], snome = person[1], anos = person[2], _a = person[3], gender = _a === void 0 ? 'male' : _a;
console.log(pnome, snome, anos, gender);
