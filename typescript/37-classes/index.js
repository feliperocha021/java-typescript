"use strict";

var User = /** @class */ (function () {
    function User(n, a, g) {
        this.name = n;
        this.age = a;
        this.gender = g;
    }
    return User;
}());
// ao definir uma classe e não especificar seu construtor
// o TS fornece um construtor padrão -> constructor(){}
var user1 = new User('jhon', 28, 'male');
var user2 = new User('merry', 29, 'female');
console.log(user1);
console.log(user2);
