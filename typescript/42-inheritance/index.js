"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// HERANÇA
var Person = /** @class */ (function () {
    function Person(name, dob, gender) {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
    }
    Person.prototype.calculateAge = function () {
        return new Date().getFullYear() - new Date(this.dob).getFullYear();
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(n, dob, gen, salary, baseLocation, isEligible, hikePercent) {
        var _this = _super.call(this, n, dob, gen) || this;
        _this.n = n;
        _this.dob = dob;
        _this.gen = gen;
        _this.salary = salary;
        _this.baseLocation = baseLocation;
        _this.isEligible = isEligible;
        _this.hikePercent = hikePercent;
        return _this;
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
}(Person));
var emp = new Employee('jhon', '30-08-1991', 'male', 10000, 'london', true, 20);
console.log(emp);
console.log(emp.getSalary());
