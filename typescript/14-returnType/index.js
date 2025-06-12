function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    console.log(num1 - num2);
}
console.log(sub(10, 5)); // Primeramente imprime o resultado 5 do console.log (da linha 6) da função sub e depois esse console.log imprime undefined o retorno de sub
export default undefined;
// serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
