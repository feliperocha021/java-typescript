"use strict";
// Diferença entre any e unknown
// O tipo `unknown` é usado quando você não sabe o tipo de uma variável, mas quer garantir que ela seja verificada antes de ser usada.
// O tipo `any` permite qualquer tipo de valor, mas não oferece segurança de tipo.

let inputVal;
let notUsed;
let uname;
notUsed = 5;
uname = notUsed; // Não deveria aceitar, mas aceita porque `any` permite qualquer tipo de valor.
//uname = inputVal; // Erro: Type 'unknown' is not assignable to type 'string'.
inputVal = 5;
console.log(uname); // 5
exports.default = undefined;
// serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
