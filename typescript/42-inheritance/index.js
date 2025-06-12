// HERANÇA
class Person {
    constructor(name, dob, gender) {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
    }
    calculateAge() {
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
const emp = new Employee('jhon', '30-08-1991', 'male', 10000, 'london', true, 20);
console.log(emp);
console.log(emp.getSalary());
export default undefined;
