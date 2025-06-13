let x = 30;
let y = 30;

console.log(x === y);

let obj1 = {age: 28};
let obj2 = {age: 28};
console.log(obj1 === obj2);
let obj3 = obj2;
console.log(obj2 === obj3);

let arr1 = [10, 20, 30];
let arr2 = arr1;
arr2.push(40, 50);
console.log(arr1, arr2);