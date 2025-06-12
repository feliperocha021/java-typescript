// type guards permite refinar o tipo de uma váriavel com base em verificações em tempo de execução
// retornam boolean ou a próprio váriavel
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
add('hello', 'world');
add(20, 30);
add('hello', 30);
// INSTANCEOF
class Animal {
    makeSound() {
        console.log('generic sound.');
    }
}
class Dog extends Animal {
    bark() {
        console.log('au au');
    }
}
function creatureSound(creature) {
    return creature instanceof Dog ? creature.bark() : creature.makeSound();
}
let animal = new Animal();
let dog = new Dog();
creatureSound(animal);
creatureSound(dog);
function greetUser(user) {
    'email' in user ? console.log(`Hello ${user.name}! Your email is ${user.email}`) : console.log(`Hello ${user.name}!`);
}
greetUser({ name: 'jhon' });
export default undefined;
