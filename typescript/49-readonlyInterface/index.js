"use strict";
// Interface atua como um contrato que define a estrutura
// de um objeto e reforça a segurança de tipo
// não tem constructor e não pode ser instanciado

var Admin = /** @class */ (function () {
    function Admin(f, l, lo) {
        this.company = 'microsoft';
        this.location = 'london';
        this.firstname = f;
        this.lastname = l;
        this.location = lo !== null && lo !== void 0 ? lo : this.location;
    }
    Admin.prototype.gretUser = function () {
        console.log('Hello Admin');
    };
    Admin.prototype.getFullName = function () {
        return this.firstname + this.lastname;
    };
    return Admin;
}());
//Se atribuir o tipo Admin o readonly não funciona
var adm1;
adm1 = new Admin('jhon', 'smith');
// adm1.company = 'sei lá' error
var adm2;
adm2 = new Admin('mark', 'jane', 'new york');
adm2.company = 'readonly não funciona';
console.log(adm1, adm2);
