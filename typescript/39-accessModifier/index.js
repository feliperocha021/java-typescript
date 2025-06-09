"use strict";
// propriedades ou funções privadas só podem ser acessadas dentro da própria classe
var Employee = /** @class */ (function () {
    function Employee(name, sal, loc, isEligible, hikePercent) {
        this.empName = name;
        this.salary = sal;
        this.baseLocation = loc;
        this.isEligible = isEligible;
        this.hikePercent = hikePercent;
    }
    Employee.prototype.getSalary = function () {
        if (this.isEligible) {
            return this.getNewsalary();
        }
        return this.salary;
    };
    Employee.prototype.getNewsalary = function () {
        return this.salary + this.salary * this.hikePercent / 100;
    };
    return Employee;
}());
var emp = new Employee('jhon', 10000, 'london', true, 20);
console.log(emp);
console.log(emp.getSalary());
module.exports = {};
