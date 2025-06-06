// rest pattern empacota uma lista de valores em um único array
// sempre é utilizado antes da atribuição

let [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7];
console.log(rest);

function addNumbers(...numbers: number[]): number {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    console.log(sum);
    return sum;
}

addNumbers(1, 2);
addNumbers(1, 2, 5, 7);

export{};