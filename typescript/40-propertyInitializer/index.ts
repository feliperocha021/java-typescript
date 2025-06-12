// podemos criar as prorpiedades de uma classe dentro do constructor
class Employee {
    // empName: string
    // private salary: number
    // baseLocation: string
    // isEligible: boolean
    // private hikePercent: number

    constructor(
        public empName: string,
        private salary: number, 
        public baseLocation: string, 
        public isEligible: boolean,
        public hikePercent: number
    ) {
        //this.empName = name;
        //this.salary = sal;
        // this.baseLocation = loc;
        // this.isEligible = isEligible;
        // this.hikePercent = hikePercent;
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

const emp = new Employee('jhon', 10000, 'london', true, 20);
console.log(emp);
console.log(emp.getSalary());
export default undefined;
