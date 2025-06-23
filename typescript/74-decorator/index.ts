/* 
- Decorators Factory é uma função que retorna uma função
de decorator
- Fonece uma maneira de criar decorators que podem ser personalizados
com base em opções de configuração ou parâmetros, permitindo flexibilidade
- Utilizada quando precisamos passar dados de fora da função decorator
*/


function LoggerDecorator(logMsg: string) {
    function Logger(target: Function) { // estamos usando o tipo Function, pois nos bastedores a classe usa uma function constructor para ser implementada
        console.log(logMsg);
        // console.log(target);
    }
    return Logger;
}

function Template(template: string, elementId: string) {
    return function(target: any) {
        const u = new target(); // chamando o constructor da classe User
        console.log(u);
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

//@LoggerDecorator('This is custom logger')
@Template('<h2>This is dynamic element</h2>', 'container')
class User {
    public name: string = 'Jhon';
    public age: number = 29;

    constructor() {
        console.log('user class constructor called...');
    }
}

const u = new User();
export default undefined;