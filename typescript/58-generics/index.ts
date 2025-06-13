// generics são marcadores de posição para tipos de dados
// permitem escrever código flexível e reutilizável
// que podem funcionar com diferentes tipos de dados sem
// sacrificar a segurança do tipo

// nesta função T representaa o tipo de dado passado na função se o array for de number o retorno será number
// se for string o retorno será string, se for number | string | boolean o retorno será number | string | boolean
// e assim por diante
function swap<T>(arr: T[], index1: number, index2: number): T[] {
    return [];
}

swap([1, 2, 3], 0, 2);
swap([1, 2, 3, 'hello', true], 0, 4);
export default undefined;