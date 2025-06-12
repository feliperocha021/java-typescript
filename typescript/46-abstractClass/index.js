"use strict";

// classe abstrata não pode ser instanciada
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class PermanetEmployee extends Employee {
    constructor(fn, ln, sal) {
        super(fn, ln);
        this.salary = sal;
    }
    getSalary() {
        return this.salary * 12;
    }
}
class ContractEmployee extends Employee {
    constructor(fn, ln, sal) {
        super(fn, ln);
        this.salary = sal;
    }
    getSalary() {
        return this.salary * 9 * 365;
    }
}
const emp1 = new PermanetEmployee('john', 'smith', 10000);
const emp2 = new ContractEmployee('mark', 'vought', 7000);
console.log(emp1.getSalary());
console.log(emp2.getSalary());
exports.default = undefined;
