// permite extrair elementos de array ou de um objeto

const users: string[] = ['jhon', 'mark', 'merry'];
console.log(users);
console.log(...users);

// fazer cópias sem  as mesmas referências
const copyUsers = [...users];
console.log(copyUsers);

// criar extensões de um array
const extendUsers: string[] = ['ravi', 'steve', ...users];
console.log(extendUsers);

// extrair propriedades de um objeto
const person = {
    fname: 'jhon',
    age: 28,
    gender: 'male'
}

const eemployee = {
    ...person, 
    salary: 1200, 
    company: 'Google'
}
console.log(eemployee);
export default undefined;
