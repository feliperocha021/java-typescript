type StringOrNumber = string | number;

function addition(a: number, b: number): number;
function addition(a: string, b: string): string;
function addition(a: number, b: string): string;
function addition(a: string, b: number): string;
function addition(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

console.log(addition('hello', 'world').split(''));
console.log(addition('world', 1).split(''));
export default undefined;