// seu valor é definido uma vez e não pode ser alterado
class Employee {
    constructor(
        public readonly empName: string,
        private salary: number, 
        public baseLocation: string, 
        public isEligible: boolean,
        public hikePercent: number
    ) {}
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

const emp = new Employee('jhon', 10000, 'london', true, 20);
console.log(emp);
console.log(emp.empName);
console.log(emp.getSalary());
export{};