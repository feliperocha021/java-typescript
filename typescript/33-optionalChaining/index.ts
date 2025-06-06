/* 
permite acesso seguro a propriedades aninhadas e chamadas
em objetos potencionalmente nulos ou indefinidos

Você aplicaria o operador em cada nível em que houver 
incerteza sobre a existência do objeto. Se você tiver certeza 
de que o objeto já existe em determinado ponto, não é necessário usá-lo.

Exemplo: const value = obj.first?.second?.third;

*/

const products = [
    {name: 'iPhone', price: 11000, details: {color: 'black', ram:8}},
    {name: 'T-Shiryt', price: 120, details: {color: 'red', size:32}},
    {name: 'TS Book', price: 50, pages: 120, authr: 'Sam'}
]

for(let prod of products) {
    console.log(`Name: ${prod.name}`);
    console.log(`Price ${prod.price}`);
    console.log(`Color: ${prod.details?.color}`); // avalia se o lado esquerdo da expressão é null ou undefined e caso seja retorna undefined, sem usar o operador ? daria erro de compilação
    console.log('************************');
}

export{};