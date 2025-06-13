function addition(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(addition('hello', 'world').split(''));
console.log(addition('world', 1).split(''));
export default undefined;
