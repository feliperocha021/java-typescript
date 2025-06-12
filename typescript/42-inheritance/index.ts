// HERANÇA
class Person {
    constructor(
        public name: string,
        public dob: string,
        public gender: string
    ) {}

    calculateAge() {
        return new Date().getFullYear() - new Date(this.dob).getFullYear()
    }
}
class Employee extends Person{
    constructor(
        n: string,
        dob: string,
        gen: string,
        private salary: number, 
        public baseLocation: string, 
        public isEligible: boolean,
        public hikePercent: number
    ) {
        super(n, dob, gen)
    }
    getSalary() {
        if(this.isEligible) {
            return this.getNewsalary();
        }
        return this.salary;
    }

    private getNewsalary(){
        return this.salary + this.salary * this.hikePercent / 100;
    }

}

const emp = new Employee('jhon','30-08-1991', 'male', 10000, 'london', true, 20);
console.log(emp);
console.log(emp.getSalary());
export default undefined;
