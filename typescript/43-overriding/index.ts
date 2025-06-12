// protected permite que a propriedade seja acessada pelos filhos

class Person {
    constructor(
        public name: string,
        protected dob: string,
        public gender: string
    ) {}


    calculateAge() {
        console.log('Age Person')
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

    calculateAge(): number {
        console.log('Age Employee');
        return 2025 - new Date(this.dob).getFullYear();
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
const emp = new Employee('jhon','08-30-1991', 'male', 10000, 'london', true, 20);
console.log(emp);
console.log(emp.getSalary());
console.log(emp.calculateAge());
export default undefined;
