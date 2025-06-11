"use strict";

var x = 20;
var admin1 = {
    name: 'jhon',
    age: 30,
    role: 'admin'
};
console.log(admin1);
// Aqui, estamos exigindo que `Order` contenha também a propriedade `status`
function processOrder(order) {
    console.log(order.id, order.items, order.status);
}
processOrder({ id: 123, items: ['item1', 'item2'], status: 'pay' });
