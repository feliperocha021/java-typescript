class User {
    name: string
    age: number
    gender: string

    constructor(n: string, a: number, g:string) {
        this.name = n;
        this.age = a;
        this.gender = g;
    }

    greetUser(salulation: string): void {
        console.log(`Hello ${salulation} ${this.name}`)
    }
}

// ao definir uma classe e não especificar seu construtor
// o TS fornece um construtor padrão -> constructor(){}
const user1 = new User('jhon', 28, 'male');
const user2 = new User('merry', 29, 'female');
console.log(user1);
console.log(user2);
user1.greetUser('Mr');
user2.greetUser('Mrs');
export{};