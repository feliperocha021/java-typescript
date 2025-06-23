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

function AccessLogger(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const getter = descriptor.get;
    const setter = descriptor.set;

    descriptor.get = function() {
        console.log(`Accessing value for property ${propertyKey}..`);
        if(getter) {
            return getter.call(this);
        }
        return;
    }

    descriptor.set = function(value: number) {
    console.log(`Setting value for property ${propertyKey}..`);
        if(setter) {
            setter.call(this, value);
        }
    }
    return descriptor;
}

class Product {
    @Capitalize // usando o decorator sobre a propriedade name
    name: string;
    private _price: number;

    @AccessLogger
    get price() {
        return this._price
    }

    set price(value: number) {
        if(value > 0) {
            this._price = value;
        } else {
            throw new Error('Price can not be negative')
        }
    }

    constructor(name: string, price: number) {
        this.name= name;
        this._price = price;
    }
}

const p = new Product('samsung', 2400);
p.price = 3000;
console.log(p.price);
export default undefined;