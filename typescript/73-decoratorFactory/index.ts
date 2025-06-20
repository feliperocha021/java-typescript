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



@LoggerDecorator('This is custom logger')
class User {
    public name: string = 'Jhon';
    public age: number = 29;

    constructor() {
        console.log('user class constructor called...');
    }
}

const u = new User();
export default undefined;