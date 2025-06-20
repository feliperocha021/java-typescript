/*
- Decorators permitem adicionar funcionalidades ou modificar
o comportamento de classes, métodos, propriedades e parâmetros
em tempo de execução
- Decorators são essencialmente funções que são aplicadas
usando o símbolo @ antes da sua declaração
- são chamados antes e na definição do alvo selecionado
- Parâmetros necessários em todo decorator (target: tipo do alvo)
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(target) {
    console.log('Logging...');
    console.log(target);
}
let User = class User {
    constructor() {
        this.name = 'Jhon';
        this.age = 29;
        console.log('user class constructor called...');
    }
};
User = __decorate([
    Logger
], User);
const u = new User();
export default undefined;
