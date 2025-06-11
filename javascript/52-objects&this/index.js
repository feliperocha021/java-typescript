// this armazena o valor do objeto atual determinado em tempo de execução

const person = {
    name: 'jhon',
    birty: 1990,
    calculateAge: function () {return 2025 - this.birty}
}

console.log(person.calculateAge());

const user = {
    name: 'mark',
    birty: 2000,
    gender: 'male'
}
user.calculateAge = person.calculateAge; 
console.log(user.calculateAge());