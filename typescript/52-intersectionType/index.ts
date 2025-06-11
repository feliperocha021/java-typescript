type stringOrNumber = string | number;
type boolOrNumber = boolean | number;

type numberType = stringOrNumber & boolOrNumber;

let x: numberType = 20;

interface user {
    name: string,
    age: number
}

interface admin {
    name: string,
    role: 'admin'
}

type adminUser = user & admin;

let admin1: adminUser = {
    name: 'jhon',
    age: 30,
    role: 'admin'
}

console.log(admin1);
// Aqui, estamos exigindo que `Order` contenha também a propriedade `status`
function processOrder(order: Order & { status: string }) {
    console.log(order.id, order.items, order.status);
}

interface Order {
    id: number,
    items: string[]
}
processOrder({id: 123, items: ['item1', 'item2'], status: 'pay'});

export{};