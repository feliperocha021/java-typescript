"use strict";
// rest pattern empacota uma lista de valores em um único array
// sempre é utilizado antes da atribuição

var _a = [1, 2, 3, 4, 5, 6, 7], a = _a[0], b = _a[1], rest = _a.slice(2);
console.log(rest);
function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        sum += num;
    }
    console.log(sum);
    return sum;
}
addNumbers(1, 2);
addNumbers(1, 2, 5, 7);
