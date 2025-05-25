var person = ['John', 30]; //(string | number)[];  
person.push('male');
//person.push(true) error de tipagem
var person2;
var array = [person2 = {
        name: 'John',
    }, true, 1999];
var person3;
array.push(person3 = { name: 'Mark' });
console.log(array); // [ { name: 'John' }, true, 1999, { name: 'Mark' } ]
console.log(array[0]); // John
// console.log(array[0].name); // error
var things = [];
things.push(true);
things.push({ name: 'John' });
things.push(person3);
console.log(things); // [ true, { name: 'John' }, { name: 'Mark' } ]
for (var _i = 0, things_1 = things; _i < things_1.length; _i++) {
    var thing = things_1[_i];
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
