// o _ é apanas uma convenção para indicar que a  propriedade é privada

class Person {
    constructor(
        public name: string,
        private _age: number | null = null, // valor inicial igual a null
    ) {}

    get age(): number {
        if(this._age != null) {
            return this._age;
        }
        throw new Error('Age is not define for: ' + this.name);
    }

    set age(age: number) {
        if(age > 0) {
            this._age = age;
        }
        else {
            throw new Error('Age cannot be a negative our null');
        }
    }
}

const p1 = new Person('jhon');
p1.age = 30;
console.log(p1);
export default undefined;
