const user = {
    name: 'Jhon',
    age: 28,
    gender: 'male',
    city: 'londo'
}

// o nome da varável tem que corresponder com o nome da propriedade do objeto
// caso contrário será atribuido undefined
const {name, city, age, gender} = user;
console.log(name, city, age, gender);

// para que ele receba uma variável com nome diferente
const {name: pnome, age: idade} = user;
console.log(pnome, idade);
export{};