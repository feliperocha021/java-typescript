"use strict";
// Interface atua como um contrato que define a estrutura
// de um objeto e reforça a segurança de tipo
// não tem constructor e não pode ser instanciado

var user1 = {
    firstname: 'jhon',
    lastname: 'smith',
    gretUser: function () {
        console.log('Hello');
    },
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
};
var Admin = /** @class */ (function () {
    function Admin(f, l) {
        this.firstname = f;
        this.lastname = l;
    }
    Admin.prototype.gretUser = function () {
        console.log('Hello Admin');
    };
    Admin.prototype.getFullName = function () {
        return this.firstname + this.lastname;
    };
    return Admin;
}());
// todas as classes que implentam a interface User podem usar essa fuunção
function display(obj) {
    obj.gretUser();
}
var adm = new Admin('jhon', 'smith');
display(adm);
