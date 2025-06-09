// o modo strict facilita a escrita de código seguro
// o js deixa alguns erros passarem
'use strict' // faz uma verificação de erros mais robusta
user = 'jhon'; // variável criada como uma propriedade no objeto da janela
console.log(user);
console.log(window.user);

let isEligible = false;
let isFullAge =  true;

if(isFullAge) {
    IsEligible = true; //variavél não definida
}
console.log(isEligible);