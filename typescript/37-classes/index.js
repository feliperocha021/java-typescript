"use strict";

class User {
    constructor(n, a, g) {
        this.name = n;
        this.age = a;
        this.gender = g;
    }
}
// ao definir uma classe e não especificar seu construtor
// o TS fornece um construtor padrão -> constructor(){}
const user1 = new User('jhon', 28, 'male');
const user2 = new User('merry', 29, 'female');
console.log(user1);
console.log(user2);
exports.default = undefined;
