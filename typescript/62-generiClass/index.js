class ShoppigKart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
}
const bookCart = new ShoppigKart();
bookCart.addItem({ name: 'A book', pages: 255, price: 25 });
bookCart.addItem({ name: 'Other book', pages: 250, price: 20 });
console.log(bookCart.getItems());
const clothCart = new ShoppigKart();
clothCart.addItem({ name: 'pants', size: '50', price: 25 });
console.log(clothCart.getItems());
const strKart = new ShoppigKart();
strKart.addItem('hello');
strKart.addItem('world');
console.log(strKart.getItems());
export default undefined;
