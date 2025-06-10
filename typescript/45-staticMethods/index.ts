// static faz com que funções e propriedades não sejam acessadas por instancias e sim pela própria classe

class Employee {
    public static count: number = 0
    constructor( 
        public firstName: string, 
        public lastName: string,
    ) {
        Employee.count++;
    }
    static sayHello() {
        return 'Hello';
    }
}

// se não defenir static em count cada instancia terá o seu próprio count
// pois o .this refrencia a instancia atual da clase
let emp1 = new Employee('jhon', 'smith');
console.log(emp1);
let emp2 = new Employee('jhon', 'smith');
console.log(emp2);
console.log(Employee.count)
console.log(Employee.sayHello());
export{};