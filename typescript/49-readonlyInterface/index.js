"use strict";
// Interface atua como um contrato que define a estrutura
// de um objeto e reforça a segurança de tipo
// não tem constructor e não pode ser instanciado

class Admin {
    constructor(f, l, lo) {
        this.company = 'microsoft';
        this.location = 'london';
        this.firstname = f;
        this.lastname = l;
        this.location = lo !== null && lo !== void 0 ? lo : this.location;
    }
    gretUser() {
        console.log('Hello Admin');
    }
    getFullName() {
        return this.firstname + this.lastname;
    }
}
//Se atribuir o tipo Admin o readonly não funciona
let adm1;
adm1 = new Admin('jhon', 'smith');
// adm1.company = 'sei lá' error
let adm2;
adm2 = new Admin('mark', 'jane', 'new york');
adm2.company = 'readonly não funciona';
console.log(adm1, adm2);
exports.default = undefined;
