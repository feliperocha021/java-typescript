"use strict";
// matenha seus parametros opcionas no final

function printDeatils(name, age, gender) {
    if (gender === void 0) { gender = 'male'; }
    console.log(name, age, gender);
}
printDeatils('jhon', 28);
printDeatils('jhon', 28, 'female');
