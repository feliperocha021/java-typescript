// propriedade statica => target: função constructor
// propriedade de instância => target: object

function Capitalize(target: object, propertyKey: string): any {
    let value: string;

    const getter = function() {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    const setter = function(newValue: string) {
        value = newValue.toLowerCase();
    }
    return  {
        get: getter,
        set: setter
    }
}

class Product {
    @Capitalize // usando o decorator sobre a propriedade name
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name= name;
        this.price = price;
    }
}

const p = new Product('samsung', 2400);
console.log(p);

export default undefined;