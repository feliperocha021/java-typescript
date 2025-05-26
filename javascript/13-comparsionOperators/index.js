console.log('2' > '1'); // true
console.log('2' > 1); // false

console.log(2 == '2'); // true  
console.log(2 === '2'); // false
console.log(2 != '2'); // false
console.log(2 !== '2'); // true

console.log('' == false); // true
console.log('' === false); // false

console.log('a' < 'A') // 97 < 65 -> false
console.log('Grass' > 'Green'); // a = 97 > e = 101 ->false

console.log(null === undefined); // false
console.log(null == undefined); // true
console.log(null >= undefined); // 0 >= NaN -> false
console.log(null == 0); // false null não é convertido para 0
console.log(null >= 0); // true null é convertido para 0