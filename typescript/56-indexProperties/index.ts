// oferecem uma maneira de criar objetos que podem conter um
// conjunto dinâmico de propriedades onde o nome não é conhecido previamente

interface Product {
    id: number,
    name: string,
    [prop: string]: string | number
}

const p1: Product = {
    id: 1,
    name: 'T-shirt',
    color: 'red',
    price: 123.7
}

const p2: Product = {
    id: 1,
    name: 'Mug',
    material: 'Ceramic',
    capacity: 300
}
console.log(p1, p2);

interface Settings {
    [props: string]: boolean | string | number
}

const mySettings: Settings = {
    darkMode: true,
    fontSize: 16,
    customTheme: 'pink'
}

interface User {
    name: string,
    [props: string]: any
}

const users: User[] = [
    {name: 'jhon', age: 29, gender: 'male'},
    {name: 'mark', isMarried: true, intersts: ['music', 'sports', 'books'] }
]

export default undefined;