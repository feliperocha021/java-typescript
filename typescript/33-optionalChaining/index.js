"use strict";
/*
permite acesso seguro a propriedades aninhadas e chamadas
em objetos potencionalmente nulos ou indefinidos
*/
var _a;

var products = [
    { name: 'iPhone', price: 11000, details: { color: 'black', ram: 8 } },
    { name: 'T-Shiryt', price: 120, details: { color: 'red', size: 32 } },
    { name: 'TS Book', price: 50, pages: 120, authr: 'Sam' }
];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var prod = products_1[_i];
    console.log("Name: ".concat(prod.name));
    console.log("Price ".concat(prod.price));
    console.log("Color: ".concat((_a = prod.details) === null || _a === void 0 ? void 0 : _a.color)); // avalia se o lado esquerdo da expressão é null ou undefined e caso seja retorna undefined
    console.log('************************');
}
