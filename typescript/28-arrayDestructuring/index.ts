// desestruturação permite descompactar arrays ou objetos em um monte de variáveis

//quando fazemos a desestruturação, o array original continua intacto

const person = ['John', 'Smith', 28];
const [fname, lname, age] = person;
console.log(fname, lname, age);


export {}; // serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
