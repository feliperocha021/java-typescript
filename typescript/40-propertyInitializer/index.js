"use strict";

// podemos criar as prorpiedades de uma classe dentro do constructor
var Employee = /** @class */ (function () {
    // empName: string
    // private salary: number
    // baseLocation: string
    // isEligible: boolean
    // private hikePercent: number
    function Employee(empName, salary, baseLocation, isEligible, hikePercent) {
        this.empName = empName;
        this.salary = salary;
        this.baseLocation = baseLocation;
        this.isEligible = isEligible;
        this.hikePercent = hikePercent;
        //this.empName = name;
        //this.salary = sal;
        // this.baseLocation = loc;
        // this.isEligible = isEligible;
        // this.hikePercent = hikePercent;
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
