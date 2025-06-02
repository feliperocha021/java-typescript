function greet(name, timeOfDay) {
    console.log(`Hello, ${name}! Good ${timeOfDay}.`);
}

greet('Maria', 'afternoon');
greet(); // quando não é passado o argumento, o valor de name será undefined

function sum(a, b) {
    return a + b;
}

console.log(sum(5, 10)); // 15
console.log(sum(5)); // NaN, pois b é undefined e a soma não pode ser realizada

function alloVotting(age) {
    if (age >= 18) {
        return 'Pode votar';
    } else {
        return;
    }
}
console.log(alloVotting(20)); // 'Pode votar'  
console.log(alloVotting(16)); // undefined, pois não retorna nada