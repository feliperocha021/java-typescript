"use strict";
// Interface atua como um contrato que define a estrutura
// de um objeto e reforça a segurança de tipo
// não tem constructor e não pode ser instanciado

let user1 = {
    firstname: 'jhon',
    lastname: 'smith',
    gretUser() {
        console.log('Hello');
    },
    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
};
class Admin {
    constructor(f, l) {
        this.firstname = f;
        this.lastname = l;
    }
    gretUser() {
        console.log('Hello Admin');
    }
    getFullName() {
        return this.firstname + this.lastname;
    }
}
// todas as classes que implentam a interface User podem usar essa fuunção
function display(obj) {
    obj.gretUser();
}
let adm = new Admin('jhon', 'smith');
display(adm);
exports.default = undefined;
