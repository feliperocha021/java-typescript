"use strict";
// o _ é apanas uma convenção para indicar que a  propriedade é privada

var Person = /** @class */ (function () {
    function Person(name, _age) {
        if (_age === void 0) { _age = null; }
        this.name = name;
        this._age = _age;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            if (this._age != null) {
                return this._age;
            }
            throw new Error('Age is not define for: ' + this.name);
        },
        set: function (age) {
            if (age > 0) {
                this._age = age;
            }
            else {
                throw new Error('Age cannot be a negative our null');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p1 = new Person('jhon');
p1.age = 30;
console.log(p1);
