// podemos criar as prorpiedades de uma classe dentro do constructor
class Employee {
    // empName: string
    // private salary: number
    // baseLocation: string
    // isEligible: boolean
    // private hikePercent: number
    constructor(empName, salary, baseLocation, isEligible, hikePercent) {
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
export default undefined;
