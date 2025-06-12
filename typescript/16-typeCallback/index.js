"use strict";

function getResult(num1, num2, print) {
    const result = num1 + num2;
    print('The result is ', result);
}
function display(msg, result) {
    console.log(msg + result);
}
getResult(5, 10, display);
exports.default = undefined;
// serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
