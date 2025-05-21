function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(1, 2)) // 3
console.log(sum(1, '2')) // 12

function sum2(num1: number, num2: number): number {
    return num1 + num2
}

console.log(sum2(1, 2)) // 3
//console.log(sum2(1, '2')) // Argument of type 'string' is not assignable to parameter of type 'number'.

let n1: number = 1 // número explícito
let n2 = 2 // inferido como number
//n2 = true // Argumento do tipo 'boolean' não é atribuível ao parâmetro do tipo 'number'.