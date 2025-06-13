// generics são marcadores de posição para tipos de dados
// permitem escrever código flexível e reutilizável
// que podem funcionar com diferentes tipos de dados sem
// sacrificar a segurança do tipo
// nesta função T representaa o tipo de dado passado na função se o array for de number o retorno será number
// se for string o retorno será string, se for number | string | boolean o retorno será number | string | boolean
// e assim por diante
// Promisses possuem por padrão o tipo generics
function swap(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length
        || index2 < 0 || index2 >= arr.length) {
        throw new Error('invalid index');
    }
    for (; index1 < index2; index1++) {
        let aux = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = aux;
        index2--;
    }
    return arr;
}
console.log(swap([1, 2, 3, 4, 5, 6, 7, 8], 0, 7));
console.log(swap(['hi', 'hello', 'how'], 0, 2));
// aplicando restrição em um tipo genérico
function expand(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
let combined = expand({ name: 'jhon', age: 28 }, { name: 'jhon', gender: 'male' });
console.log(combined.name);
console.log(combined);
export default undefined;
