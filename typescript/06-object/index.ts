let person = {
    name: "John",
    age: 30
}

person = {name: "Jane", age: 22, /* gender: female */}  // a adição da propriedade gender que não foi inicialmente definida não é permitida e além disso todas as propriedades não opcionais devem ser definidas
console.log(person.name) //John
console.log(person['name']) //John
// console.log(person[0]) //undefined

let person2: object = {
    name: "John",
    age: 30
}

person2 = {name: "Jane", age: 22, gender: 'male'} // definindo o tipo como object, não é possível acessar as propriedades do objeto, pois o TypeScript não sabe quais são as propriedades que o objeto pode ter. O TypeScript só sabe que é um objeto e não permite acessar as propriedades diretamente. Para acessar as propriedades, é necessário fazer um type assertion ou usar uma interface ou type para definir o tipo do objeto.
console.log(person2/*.name*/) // error: Property 'name' does not exist on type 'object'. O TypeScript não sabe que o objeto tem a propriedade name, pois o tipo é object e não tem propriedades definidas.

// Exemplo de type assertion
let person3 = person2 as {name: string, age: number} // fazendo um type assertion, o TypeScript agora sabe que o objeto tem as propriedades name e age e podemos acessá-las diretamente
person3 = {name: "Jane", age: 22, /* gender: 'male' */} // a definição das propriedades name e age é obrigatória e a propriedade gender não é permitida, pois não foi definida no type assertion. O TypeScript vai dar erro se tentarmos adicionar
console.log(person3.name)

let person4 = <{name: string, age: number}>person2 // outra forma de fazer type assertion, mas não é recomendada, pois pode causar confusão com o JSX. O TypeScript agora sabe que o objeto tem as propriedades name e age e podemos acessá-las diretamente
console.log(person4.name) // Jane

let person5: {
    name: string,
    age: number,
    address: {
        city: string,
        country: string
    }
} = {
    name: "John",
    age: 30,
    address : {
        city: "New York",
        country: "USA"
    }
}

console.log(person5.address.city) // New York
console.log(person5['address']['city']) // New York
// console.log(person5['0']['city']) // error
export default undefined;
 // serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
