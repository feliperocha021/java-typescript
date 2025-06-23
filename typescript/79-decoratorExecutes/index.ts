// Os decorators de classe, propriedade de classe, parametro e metódo são executados simultaneamente
// Avaliação das expressões (A(), B(), C()) → de cima para baixo
// Execução dos decorators retornados → de baixo para cima A(B(C(method)))
// decorators de parametros - esq p/ dir; decorators de metódos cima p/ baixo

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

function CLS_DECORATOR(target: any){
    console.log('CLASS DECORATOR CALLED!');
}

function PROP_DECORATOR(target: any, propertyKey: string): any{
    console.log('PROPERTY DECORATOR CALLED!');
}

function ACC_DECORATOR(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('ACCESSOR DECORATOR CALLED');
}

function PARAM_DECORATOR(target: any, paramName: string, index: number){
    console.log('PARAMETER DECORATOR CALLED');
}

function METH_DECORATOR(target: any, methodName: string, descriptor: PropertyDescriptor){
    console.log('METHOD DECORATOR CALLED!');
}

@CLS_DECORATOR
class Person{
    @PROP_DECORATOR
    name: string;

    constructor(n: string){
        this.name = n;
    }

    @METH_DECORATOR
    calculateAge(@PARAM_DECORATOR dob: string){
        //calculate date of birth;
    }
}

export default undefined;

