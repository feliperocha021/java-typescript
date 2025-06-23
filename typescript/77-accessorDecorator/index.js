// propriedade statica => target: função constructor
// propriedade de instância => target: object
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Capitalize(target, propertyKey) {
    let value;
    const getter = function () {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    const setter = function (newValue) {
        value = newValue.toLowerCase();
    };
    return {
        get: getter,
        set: setter
    };
}
function AccessLogger(target, propertyKey, descriptor) {
    const getter = descriptor.get;
    const setter = descriptor.set;
    descriptor.get = function () {
        console.log(`Accessing value for property ${propertyKey}..`);
        if (getter) {
            return getter.call(this);
        }
        return;
    };
    descriptor.set = function (value) {
        console.log(`Setting value for property ${propertyKey}..`);
        if (setter) {
            setter.call(this, value);
        }
    };
    return descriptor;
}
class Product {
    get price() {
        return this._price;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Price can not be negative');
        }
    }
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }
}
__decorate([
    Capitalize // usando o decorator sobre a propriedade name
], Product.prototype, "name", void 0);
__decorate([
    AccessLogger
], Product.prototype, "price", null);
const p = new Product('samsung', 2400);
p.price = 3000;
console.log(p.price);
export default undefined;
