"use strict";

// por padrão o constructor é public
// torna-lo privado impede que a classe seja instanciada diretamente fora dela mesma.
// garanti que só exista uma única instância da classe.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.getInstance = function () {
        if (!Person._instance) {
            Person._instance = new Person("jhon", 30); // Valores fixos na única instância
        }
        return Person._instance;
    };
    Person.prototype.getInfo = function () {
        return "Nome: ".concat(this.name, ", Idade: ").concat(this.age);
    };
    return Person;
}());
var person1 = Person.getInstance();
var person2 = Person.getInstance();
console.log(person1.getInfo());
console.log(person1 === person2); // true
