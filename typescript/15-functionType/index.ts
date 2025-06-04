type User = {name: string, age: number};

function greetUser(user: User): void {
  const msg = `Name: ${user.name}, Age: ${user.age}`;
  console.log(msg);
}

function sum(a: number, b: number): number {
  return a + b;
}

function isEligible(user: User): void {
  console.log(user.age > 18.);
}

let greet: Function;
greet = greetUser;
let user: User = {name: 'John', age: 30};
greet(user); // Output: Name: John, Age: 30
greet = sum;
console.log(greet(user, user)); // Deveria dar erro, pois os parâmetros de sum são números e não um objeto User. Output será [object Object][object Object]
//Resolvendo o erro
let greet2: (user: User) => void;
greet2 = greetUser;
greet2(user); // Output: Name: John, Age: 30
//greet2 = sum; // agora dá erro, pois greet2 espera uma função que recebe um User

// Agora vamos usar uma função que recebe um User e retorna void
let greet3 = greetUser;
greet3(user); // Output: Name: John, Age: 30

greet2 = isEligible;
greet3 = isEligible; // greet3 agora também é do tipo isEligible
greet2(user); // true
greet3(user); // true

export {}; // serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
