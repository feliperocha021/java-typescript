"use strict";
// static faz com que funções e propriedades não sejam acessadas por instancias e sim pela própria classe

var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        Employee.count++;
    }
    Employee.sayHello = function () {
        return 'Hello';
    };
    Employee.count = 0;
    return Employee;
}());
// se não defenir static em count cada instancia terá o seu próprio count
// pois o .this refrencia a instancia atual da clase
var emp1 = new Employee('jhon', 'smith');
console.log(emp1);
var emp2 = new Employee('jhon', 'smith');
console.log(emp2);
console.log(Employee.count);
console.log(Employee.sayHello());
