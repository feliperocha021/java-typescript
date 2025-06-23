var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// O decorator de parâmetro recebe: 
// - target: object. Se o método for estático, target: Function é a função construtora
// - propertyKey: nome do método onde o parâmetro está definido.
// - indexParam: índice do parâmetro.
function param(target, propertyKey, indexParam) {
    console.log(`Parametro decorado no método "${propertyKey}" no índice ${indexParam}.`);
}
// O decorator de método intercepta a chamada do método decorado.
// Ele recebe:
// - target: objeto (prototype se método de instância; função construtora se estático).
// - methodName: nome do método.
// - descriptor: descriptor da propriedade (com o método original).
function Logger(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`[Logger] Chamando o método "${methodName}" com argumentos:`, args);
        const result = originalMethod.apply(this, args);
        console.log(`[Logger] Resultado do método "${methodName}":`, result);
        return result;
    };
}
class Person {
    constructor(n) {
        this.name = n;
    }
    // O decorator @Logger intercepta a chamada de calculateAge.
    // O decorator @param (aplicado ao parâmetro "dob") será executado quando a classe for definida.
    calculateAge(dob) {
        // Exemplo simples: calcula a idade com base no ano de nascimento.
        // Para efeito de exemplo, vamos usar o ano atual.
        const birthYear = new Date(dob).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        return age;
    }
}
__decorate([
    Logger,
    __param(0, param)
], Person.prototype, "calculateAge", null);
const p = new Person('jhon');
p.calculateAge('06-15-1998');
export default undefined;
