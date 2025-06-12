"use strict";
// desestruturação permite descompactar arrays ou objetos em um monte de variáveis

//quando fazemos a desestruturação, o array original continua intacto
const person = ['John', 'Smith', 28];
const [fname, lname, age] = person;
console.log(fname, lname, age);
const [nome, , idade] = person;
console.log(nome, idade);
const [primeroNome, segundoNome] = person;
console.log(primeroNome, segundoNome);
// agora caso algum valor seja opcional podemos definir um valor padrão para não receber undefined
const [pnome, snome, anos, gender = 'male'] = person;
console.log(pnome, snome, anos, gender);
exports.default = undefined;
// serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
