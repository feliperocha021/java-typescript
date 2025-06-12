// Interface atua como um contrato que define a estrutura
// de um objeto e reforça a segurança de tipo
// não tem constructor e não pode ser instanciado

// *Comparações*	   *Interface*	            *Classe Abstrata*
// Implementação	Apenas assinatura	    Pode ter métodos concretos
// Construtor	    Não permitido	        Permitido
// Herança	        Múltiplas interfaces	Apenas uma classe abstrata
// Uso principal	Definir estrutura	    Compartilhar comportamento

interface User {
    firstname: string;
    lastname: string;
    readonly company: string;
    gretUser(): void;
    getFullName(): string;
    location?: string;
}

class Admin implements User{
    public firstname: string;
    public lastname: string;
    public company: string = 'microsoft';
    public location?: string | undefined = 'london';

    constructor(f: string, l: string, lo?: string) {
        this.firstname = f;
        this.lastname = l;
        this.location = lo ?? this.location;
    }

    gretUser() {
        console.log('Hello Admin');
    }

    getFullName() {
        return this.firstname + this.lastname
    }
}

//Se atribuir o tipo Admin o readonly não funciona
let adm1: User;
adm1 = new Admin('jhon', 'smith');
// adm1.company = 'sei lá' error
let adm2: Admin;
adm2 = new Admin('mark', 'jane', 'new york')
adm2.company = 'readonly não funciona'
console.log(adm1, adm2);
export default undefined;
