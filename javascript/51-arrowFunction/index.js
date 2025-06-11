// Arrow function é uma função anônima escrita de uuma forma mais curta
// não funciona com o this, pois define o this com o escopo onde foram definidas
// função anônima
const greet = function() {
    console.log('hello user.');
}
greet();

// Arrow function
const greet2 = () => {
    console.log('hello user.');
}
greet2();

// Arrow function quando há 1 único parametro e/ou uma linha de código de função
const greet3 = name => console.log(`hello ${name}.`);
greet3('jhon');

// OBS: Se couber em uma linha e for usar {} o return tem que ser explícito
const add = (x, y) => {return x + y};

const add2 = (x, y) =>  x + y;

console.log(add(3, 1), add2(3, 1));


