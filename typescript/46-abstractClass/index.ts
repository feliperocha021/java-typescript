// classe abstrata não pode ser instanciada
abstract class Employee {
    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    abstract getSalary(): number;
}


class PermanetEmployee extends Employee {
    public salary: number

    constructor(
        fn: string,
        ln: string,
        sal: number
    ) {
        super(fn, ln);
        this.salary = sal;
    }

    getSalary(): number {
        return this.salary * 12;
    }
}

class ContractEmployee extends Employee {
    public salary: number

    constructor(
        fn: string,
        ln: string,
        sal: number
    ) {
        super(fn, ln);
        this.salary = sal;
    }
        getSalary(): number {
        return this.salary * 9 * 365;
    }
}


const emp1 = new PermanetEmployee('john', 'smith', 10000);
const emp2 = new ContractEmployee('mark', 'vought', 7000);
console.log(emp1.getSalary());
console.log(emp2.getSalary());
export{};