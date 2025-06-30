"use strict";
// Namespace: gera um aruivo compilado de todos os arquivos ts e seus dependentes
// ES6 Module: gera um aruivo compilado de todos os arquivos ts e detecta automaticamente os arquivos dependentes afeta o desempenho
// Namespace foencem um mecanismo para organizar o código em aagrupammentos lóogicos,
// evitando conflitos de nomenclatura e promovendo a reutilização do código.
// São essencialmente containers que contém variáveis,funções, classes e interfaces
// Tem que ir no tsconfig.json e colocar "outFile": "./bundle.js",
// e usar "module": "amd" ou "module": "system"
///<reference path="./user-action.ts" />
const u1 = UserAction.createUser('jhon', 28, 'male');
console.log(UserAction.getUsers());
