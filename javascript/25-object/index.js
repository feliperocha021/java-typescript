let user = new Object();
user.name = 'jhon';
user.age = '28'

// criar propriedade com espaço
let user2 = {
    name: 'jhon',
    age: 24,
    'full name': 'Jhon Smith'
}

console.log(user);
console.log(user.name);
console.log(user['name']);
// única forma de acessar propriedade com espaço
console.log(user2['full name']);
user2.gender = 'male';
user.age = 25;
console.log(user2);

delete user2.gender;
console.log(user2);
