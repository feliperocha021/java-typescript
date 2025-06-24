var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function algumaCoisa<T extends ConstructorType<ALGUM_TIPO>>(target: T): T
// Nesse caso, ALGUM_TIPO é o tipo da instância que a classe target vai criar.
// Por exemplo Person
// Já nessa função como não passamos o ALGUM_TIPO ele utiliza o valor
// padrão definido que foi {} em type ConstructorType<T = {}>
function Logger(target) {
    class LoggingClass extends target {
        constructor(...args) {
            super(...args);
            console.log('Creating a new LoggingClass instance');
        }
    }
    LoggingClass.company = 'Google';
    return LoggingClass;
}
let Person = class Person {
    constructor(n) {
        this.name = n;
    }
};
Person = __decorate([
    Logger
], Person);
const p = new Person('Jhon');
console.log(p);
export default undefined;
