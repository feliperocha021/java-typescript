"use strict";
// protected permite que a propriedade seja acessada pelos filhos

class Person {
    constructor(name, dob, gender) {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
    }
    calculateAge() {
        console.log('Age Person');
        return new Date().getFullYear() - new Date(this.dob).getFullYear();
    }
}
class Employee extends Person {
    constructor(n, dob, gen, salary, baseLocation, isEligible, hikePercent) {
        super(n, dob, gen);
        this.salary = salary;
        this.baseLocation = baseLocation;
        this.isEligible = isEligible;
        this.hikePercent = hikePercent;
    }
    calculateAge() {
        console.log('Age Employee');
        return 2025 - new Date(this.dob).getFullYear();
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
const emp = new Employee('jhon', '08-30-1991', 'male', 10000, 'london', true, 20);
console.log(emp);
console.log(emp.getSalary());
console.log(emp.calculateAge());
exports.default = undefined;
