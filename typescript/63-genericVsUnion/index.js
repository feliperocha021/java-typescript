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
const numKart = new ShoppigKart();
numKart.addItem(1);
numKart.addItem(11);
console.log(numKart.getItems());
// em types não conseguimos definir items sendo ou um array de numbers ou um array de string
// pois addItem recebe tanto números ou strings e daria erro com um array apenas de numbers por exemplo
// class ShoppigKart2 {
//     private items: number[] | string[] = [];
//     public addItem(item: string | number) {
//         this.items.push(item);
//     }
//     public getItems() {
//         return this.items;
//     }
// }
export default undefined;
