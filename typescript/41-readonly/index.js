"use strict";

// seu valor é definido uma vez e não pode ser alterado
var Employee = /** @class */ (function () {
    function Employee(empName, salary, baseLocation, isEligible, hikePercent) {
        this.empName = empName;
        this.salary = salary;
        this.baseLocation = baseLocation;
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
console.log(emp.empName);
console.log(emp.getSalary());
