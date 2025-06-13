// U extends keyof T fala para o compilador que o tipo U é uma chave do tipo T
function getPropValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

console.log(getPropValue({name: 'jhon', age: 28}, 'name'));
export default undefined