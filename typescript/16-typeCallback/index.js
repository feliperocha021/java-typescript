"use strict";
function getResult(num1, num2, print) {
    const result = num1 + num2;
    print('The result is ', result);
}
function display(msg, result) {
    console.log(msg + result);
}
getResult(5, 10, display);
