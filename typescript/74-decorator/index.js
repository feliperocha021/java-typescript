/*
- Decorators Factory é uma função que retorna uma função
de decorator
- Fonece uma maneira de criar decorators que podem ser personalizados
com base em opções de configuração ou parâmetros, permitindo flexibilidade
- Utilizada quando precisamos passar dados de fora da função decorator
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LoggerDecorator(logMsg) {
    function Logger(target) {
        console.log(logMsg);
        // console.log(target);
    }
    return Logger;
}
function Template(template, elementId) {
    return function (target) {
        const u = new target(); // chamando o constructor da classe User
        console.log(u);
        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = template;
            const h2 = container.querySelector('h2');
            if (h2) {
                h2.textContent = 'hello Mr. ' + u.name;
            }
        }
    };
}
//@LoggerDecorator('This is custom logger')
let User = class User {
    constructor() {
        this.name = 'Jhon';
        this.age = 29;
        console.log('user class constructor called...');
    }
};
User = __decorate([
    Template('<h2>This is dynamic element</h2>', 'container')
], User);
const u = new User();
export default undefined;
