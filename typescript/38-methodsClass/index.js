"use strict";

var User = /** @class */ (function () {
    function User(n, a, g) {
        this.name = n;
        this.age = a;
        this.gender = g;
    }
    User.prototype.greetUser = function (salulation) {
        console.log("Hello ".concat(salulation, " ").concat(this.name));
    };
    return User;
}());
// ao definir uma classe e não especificar seu construtor
// o TS fornece um construtor padrão -> constructor(){}
var user1 = new User('jhon', 28, 'male');
var user2 = new User('merry', 29, 'female');
console.log(user1);
console.log(user2);
user1.greetUser('Mr');
user2.greetUser('Mrs');
