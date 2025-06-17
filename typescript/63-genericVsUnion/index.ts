type Book = {
    name: string,
    pages: number,
    price: number
}

type Cloth = {
    name: string,
    size: string,
    price: number
}

class ShoppigKart<T> {
    private items: T[] = [];
    
    public addItem(item: T) {
        this.items.push(item);
    }
    public getItems() {
        return this.items;
    }
}

const bookCart = new ShoppigKart<Book>();
bookCart.addItem({name: 'A book', pages: 255, price: 25});
bookCart.addItem({name: 'Other book', pages: 250, price: 20});
console.log(bookCart.getItems());
const clothCart = new ShoppigKart<Cloth>();
clothCart.addItem({name: 'pants', size: '50', price: 25});
console.log(clothCart.getItems());
const strKart = new ShoppigKart<string>();
strKart.addItem('hello');
strKart.addItem('world');
console.log(strKart.getItems());
const numKart = new ShoppigKart<number>();
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

export default undefined