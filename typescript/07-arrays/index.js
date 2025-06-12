let person = ['John', 30]; //(string | number)[];  
person.push('male');
//person.push(true) error de tipagem
let person2;
let array = [person2 = {
        name: 'John',
    }, true, 1999];
let person3;
array.push(person3 = { name: 'Mark' });
console.log(array); // [ { name: 'John' }, true, 1999, { name: 'Mark' } ]
console.log(array[0]); // John
// console.log(array[0].name); // error
let things = [];
things.push(true);
things.push({ name: 'John' });
things.push(person3);
console.log(things); // [ true, { name: 'John' }, { name: 'Mark' } ]
for (let thing of things) {
    if (typeof things === 'boolean') {
        console.log(thing); // true
    }
    else if (typeof things === 'string') {
        console.log(thing); // John
    }
    else if (typeof things === 'object') {
        console.log(thing); // Mark
    }
}
export default undefined;
// serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
