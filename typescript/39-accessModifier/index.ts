// propriedades ou funções privadas só podem ser acessadas dentro da própria classe

class Employee {
    empName: string
    private salary: number
    baseLocation: string
    isEligible: boolean
    private hikePercent: number

    constructor(
        name: string,
        sal: number, 
        loc: string, 
        isEligible: boolean,
        hikePercent: number
    ) {
        this.empName = name;
        this.salary = sal;
        this.baseLocation = loc;
        this.isEligible = isEligible;
        this.hikePercent = hikePercent;
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
