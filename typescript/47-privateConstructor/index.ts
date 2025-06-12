// por padrão o constructor é public
// torna-lo privado impede que a classe seja instanciada diretamente fora dela mesma.
// garanti que só exista uma única instância da classe.
class Person {
    private static _instance: Person;
    private readonly name: string;
    private readonly age: number;

    private constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    static getInstance(): Person {
        if (!Person._instance) {
            Person._instance = new Person("jhon", 30); // Valores fixos na única instância
        }
        return Person._instance;
    }

    getInfo() {
        return `Nome: ${this.name}, Idade: ${this.age}`;
    }
}

const person1 = Person.getInstance();
const person2 = Person.getInstance();
console.log(person1.getInfo());
console.log(person1 === person2); // true

export default undefined;
