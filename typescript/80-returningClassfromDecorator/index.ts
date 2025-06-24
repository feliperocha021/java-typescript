// - definindo o tipo de construtor genérico
// - Nos types genéricos o TypeScript não tem argumentos concretos pra analisar. 
// Então se você não der um valor padrão (= {}),
// ele fica no escuro e exige que você diga quem é T.
// então definimos que por padrão T será igual {}, quando T não é definido
type ConstructorType<T = {}> = new (...args: any[]) => T;

// function algumaCoisa<T extends ConstructorType<ALGUM_TIPO>>(target: T): T
// Nesse caso, ALGUM_TIPO é o tipo da instância que a classe target vai criar.
// Por exemplo Person

// Já nessa função como não passamos o ALGUM_TIPO ele utiliza o valor
// padrão definido que foi {} em type ConstructorType<T = {}>
function Logger<T extends ConstructorType>(target: T): T {
    class LoggingClass extends target {
        static company: string = 'Google';
        constructor(...args: any[]) {
        super(...args);
        console.log('Creating a new LoggingClass instance')
        }
        // se quiser, pode adicionar metódos
    }
    return LoggingClass;
}

@Logger
class Person {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const p = new Person('Jhon');
console.log(p);

export default undefined;