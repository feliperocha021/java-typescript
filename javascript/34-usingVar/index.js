/*
Diferença de escopo entre var e let:
*/

// var tem escopo de função e de bloco, já let tem apenas de bloco
function greet() {
    var x = 10;
    if(x < 100) {
        var y = 100;
        let z = 200;
    }
    console.log(y);
    console.log(z); // error
}

greet();

// var pode ser redeclarada, enquanto let não
var x = 110;
var x = 'hello';

let a = 110;
let a = 'hello'

// var pode ser acessada antes de ser dexlarada, enquanto let não

console.log(b); // undefined
console.log(c); // error
var b = 2;
let c = 1;