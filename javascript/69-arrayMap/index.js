// map é utilizado para transformar os elementos de um array
// aplicando uma callbak a cada elemento do array
// o retorno da callback é aplicado sobre cada posição do novo array
// retorna um novo array com os dados transformados
// o array original não é modificado
// newArray = arrayAtual.map(callback(elemento, index, arrayAtual))

const numbers = [1, 4, 9];
const names = ['jhon', 'sarah', 'steve'];
const products = [
    {id: 1, name: 'shirt', price: 20, discount: 10},
    {id: 2, name: 'haat', price: 10, discount: 5},
    {id: 3, name: 'T-shirt', price: 30, discount: 10}
]

let newNumbers = numbers.map((elem, index, numbers) => {
    // a função é chamada em loop em razão do tamanho do array
    // e o retorno é atribuido a cada índice do array
    console.log(index, elem, numbers); 
    return elem * elem;
})
console.log(newNumbers);

let newNames = names.map((elem) => {
    return elem.toUpperCase();
})
console.log(newNames);

let newProducts = products.map((prod) => {
    const { discount, ...resto } = prod
    return prod = {
        ...resto,
        price : prod.price,
        discountedPrice: prod.price - (prod.price * discount / 100)
    }
})
console.log(newProducts);