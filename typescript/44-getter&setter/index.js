// o _ é apanas uma convenção para indicar que a  propriedade é privada
class Person {
    constructor(name, _age = null) {
        this.name = name;
        this._age = _age;
    }
    get age() {
        if (this._age != null) {
            return this._age;
        }
        throw new Error('Age is not define for: ' + this.name);
    }
    set age(age) {
        if (age > 0) {
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
