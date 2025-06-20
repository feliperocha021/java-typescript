/* 
- Decorators permitem adicionar funcionalidades ou modificar 
o comportamento de classes, métodos, propriedades e parâmetros
em tempo de execução
- Decorators são essencialmente funções que são aplicadas 
usando o símbolo @ antes da sua declaração
- são chamados antes e na definição do alvo selecionado
- Parâmetros necessários em todo decorator (target: tipo do alvo)
*/

function Logger(target: Function) { // estamos usando o tipo Function, pois nos bastedores a classe usa uma function constructor para ser implementada
    console.log('Logging...');
    console.log(target);
}

@Logger
class User {
    public name: string = 'Jhon';
    public age: number = 29;

    constructor() {
        console.log('user class constructor called...');
    }
}

const u = new User();
export default undefined;