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

// classe abstrata não pode ser instanciada
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Employee;
}());
var PermanetEmployee = /** @class */ (function (_super) {
    __extends(PermanetEmployee, _super);
    function PermanetEmployee(fn, ln, sal) {
        var _this = _super.call(this, fn, ln) || this;
        _this.salary = sal;
        return _this;
    }
    PermanetEmployee.prototype.getSalary = function () {
        return this.salary * 12;
    };
    return PermanetEmployee;
}(Employee));
var ContractEmployee = /** @class */ (function (_super) {
    __extends(ContractEmployee, _super);
    function ContractEmployee(fn, ln, sal) {
        var _this = _super.call(this, fn, ln) || this;
        _this.salary = sal;
        return _this;
    }
    ContractEmployee.prototype.getSalary = function () {
        return this.salary * 9 * 365;
    };
    return ContractEmployee;
}(Employee));
var emp1 = new PermanetEmployee('john', 'smith', 10000);
var emp2 = new ContractEmployee('mark', 'vought', 7000);
console.log(emp1.getSalary());
console.log(emp2.getSalary());
