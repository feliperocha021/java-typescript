function add(num1: number, num2: number): number{
    return num1 + num2;
}

function sub(num1: number, num2: number): void{
    console.log(num1 - num2);
}

console.log(sub(10, 5)); // Primeramente imprime o resultado 5 do console.log (da linha 6) da função sub e depois esse console.log imprime undefined o retorno de sub