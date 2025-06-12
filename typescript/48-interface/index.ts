// Interface atua como um contrato que define a estrutura
// de um objeto e reforça a segurança de tipo
// não tem constructor e não pode ser instanciado

// *Comparações*	   *Interface*	            *Classe Abstrata*
// Implementação	Apenas assinatura	    Pode ter métodos concretos
// Construtor	    Não permitido	        Permitido
// Herança	        Múltiplas interfaces	Apenas uma classe abstrata
// Uso principal	Definir estrutura	    Compartilhar comportamento

interface User {
    firstname: string,
    lastname: string,
    gretUser(): void,
    getFullName(): string
}

let user1: User = {
    firstname: 'jhon',
    lastname: 'smith',
    gretUser() {
        console.log('Hello');
    },
    getFullName() {
        return this.firstname + ' ' + this.lastname
    }
}

class Admin implements User{
    public firstname: string;
    public lastname: string;

    constructor(f: string, l: string) {
        this.firstname = f;
        this.lastname = l;
    }

    gretUser() {
        console.log('Hello Admin');
    }

    getFullName() {
        return this.firstname + this.lastname
    }
}

// todas as classes que implentam a interface User podem usar essa fuunção
function display(obj: User) {
    obj.gretUser();
}

let adm = new Admin('jhon', 'smith');
display(adm);
export default undefined;
