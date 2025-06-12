// usar o .this em esopo global irá referenciar o objeto global que é o wwindows
// no 'use strict' é undefined o this na função
// ao usar this em uma arrow function ele vai referenciar o escopo pai
console.log(this);

function foo() {
    console.log(this);
}
foo();

// na função regular greet ou em qualquer outra função regular o this será sempre o escopo global
const greet = function() {
    console.log(this);
}
greet();

let person = {
    name: 'jhon',
    ageYear: 1999,
    arrow2: () => console.log(this),
    calculateAge: function() {
        console.log(this);
        function inner() {
            console.log(this);
        }
        inner();
        const arrow = () => console.log(this);
        arrow();
        return 2025 - this.ageYear;
    }
}
person.calculateAge();
person.arrow2();
const greet2 = () => console.log(this);
greet();