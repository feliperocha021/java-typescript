// seu valor é definido uma vez e não pode ser alterado
class Employee {
    constructor(empName, salary, baseLocation, isEligible, hikePercent) {
        this.empName = empName;
        this.salary = salary;
        this.baseLocation = baseLocation;
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
console.log(emp.empName);
console.log(emp.getSalary());
export default undefined;
