/* 
- Os mútiplos Factories Decorators são executados na ordem em que chamados,
mas as suas funções de retorno são chamadas na ordem inversa
*/


function LoggerDecorator(logMsg: string) {
    console.log('LOGGER DECORATOR FACTORY');
    function Logger(target: Function) { // estamos usando o tipo Function, pois nos bastedores a classe usa uma function constructor para ser implementada
        console.log('LOGGER DECORATOR');
        // console.log(logMsg);
        // console.log(target);
    }
    return Logger;
}

function Template(template: string, elementId: string) {
    console.log('TEMPLATE DECORATOR FACTORY');
    return function(target: any) {
        console.log('TEMPLATE DECORATOR');
        const u = new target(); // chamando o constructor da classe User
        const container = document.getElementById(elementId);
        if(container) {
            container.innerHTML = template;
            const h2 = container.querySelector('h2');
            if(h2) {
                h2.textContent = 'hello Mr. ' + u.name;
            }
        }
    }
}

@LoggerDecorator('This is custom logger')
@Template('<h2>This is dynamic element</h2>', 'container')
class User {
    public name: string = 'Jhon';
    public age: number = 29;

    constructor() {
        console.log('user class constructor called...');
    }
}

// const u = new User();
export default undefined;