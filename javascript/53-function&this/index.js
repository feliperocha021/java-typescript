// usar o .this em esopo global irá referenciar o objeto global que é o wwindows
// no 'use strict' é undefined o this na função
console.log(this);

function foo() {
    console.log(this);
}
foo();

const greet = function() {
    console.log(this);
}
greet();

let person = {
    name: 'jhon',
    ageYear: 1999,
    calculateAge: function() {
        console.log(this);
        function inner() {
            console.log(this);
        }
        inner();
        return 2025 - this.ageYear;
    }
}
person.calculateAge();