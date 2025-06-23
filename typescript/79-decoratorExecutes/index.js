// Os decorators de classe, propriedade de classe, parametro e metódo são executados simultaneamente
// Avaliação das expressões (A(), B(), C()) → de cima para baixo
// Execução dos decorators retornados → de baixo para cima A(B(C(method)))
// decorators de parametros - esq p/ dir; decorators de metódos cima p/ baixo
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* 🧭 Ordem de execução dos decorators
Quando você define uma classe com múltiplos decorators, a ordem de execução é:

1 Parâmetros de instância (de baixo para cima, por índice)

2 Parâmetros de métodos estáticos

3 Decorators de propriedades de instância

4 Decorators de propriedades estáticas

5 Decorators de métodos de instância

6 Decorators de métodos estáticos

7 Decorator da classe

- eles são executados de dentro para fora e
de baixo para cima, respeitando essa hierarquia.
*/
function CLS_DECORATOR(target) {
    console.log('CLASS DECORATOR CALLED!');
}
function PROP_DECORATOR(target, propertyKey) {
    console.log('PROPERTY DECORATOR CALLED!');
}
function ACC_DECORATOR(target, name, descriptor) {
    console.log('ACCESSOR DECORATOR CALLED');
}
function PARAM_DECORATOR(target, paramName, index) {
    console.log('PARAMETER DECORATOR CALLED');
}
function METH_DECORATOR(target, methodName, descriptor) {
    console.log('METHOD DECORATOR CALLED!');
}
let Person = class Person {
    constructor(n) {
        this.name = n;
    }
    calculateAge(dob) {
        //calculate date of birth;
    }
};
__decorate([
    PROP_DECORATOR
], Person.prototype, "name", void 0);
__decorate([
    METH_DECORATOR,
    __param(0, PARAM_DECORATOR)
], Person.prototype, "calculateAge", null);
Person = __decorate([
    CLS_DECORATOR
], Person);
export default undefined;
