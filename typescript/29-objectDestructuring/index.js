"use strict";

var user = {
    name: 'Jhon',
    age: 28,
    gender: 'male',
    city: 'londo'
};
// o nome da varável tem que corresponder com o nome da propriedade do objeto
// caso contrário será atribuido undefined
var name = user.name, city = user.city, age = user.age, gender = user.gender;
console.log(name, city, age, gender);
// para que ele receba uma variável com nome diferente
var pnome = user.name, idade = user.age;
console.log(pnome, idade);
