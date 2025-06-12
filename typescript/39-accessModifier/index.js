"use strict";
// propriedades ou funções privadas só podem ser acessadas dentro da própria classe
class Employee {
    constructor(name, sal, loc, isEligible, hikePercent) {
        this.empName = name;
        this.salary = sal;
        this.baseLocation = loc;
        this.isEligible = isEligible;
        this.hikePercent = hikePercent;
    }
    getSalary() {
        if (this.isEligible) {
            return this.getNewsalary();
        }
        return this.salary;
    }
    getNewsalary() {
        return this.salary + this.salary * this.hikePercent / 100;
    }
}
const emp = new Employee('jhon', 10000, 'london', true, 20);
console.log(emp);
console.log(emp.getSalary());
module.exports = {};
