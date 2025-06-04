// never garante que umaa função nunca vai retornar um valor, ou seja, ela não vai terminar a execução normalmente.


function greetUser(name: string): void {
    console.log(`Hello, ${name}!`);
}


function createError(msg: string, code: number): never {
    throw (`Error ${code}: ${msg}`);
}

// No consoole o greetUser ainda retorna undefined, mas o createError nunca vai retornar um valor, pois sempre lança um erro.
console.log(greetUser("John"));
console.log(createError("Something went wrong", 500));
export {}; // serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
