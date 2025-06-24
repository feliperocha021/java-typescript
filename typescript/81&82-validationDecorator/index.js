var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function required(target, propName) {
    let previousEl = [];
    if (validateObject[target.constructor.name]) {
        previousEl = validateObject[target.constructor.name][propName] ? validateObject[target.constructor.name][propName] : [];
    }
    validateObject[target.constructor.name] = Object.assign(Object.assign({}, validateObject[target.constructor.name]), { [propName]: [...previousEl, 'required'] });
}
function minlength(length) {
    return function (target, propName) {
        let previousEl = [];
        if (validateObject[target.constructor.name]) {
            previousEl = validateObject[target.constructor.name][propName] ? validateObject[target.constructor.name][propName] : [];
        }
        validateObject[target.constructor.name] = Object.assign(Object.assign({}, validateObject[target.constructor.name]), { [propName]: [...previousEl, 'minlength'] });
    };
}
function positiveNumber(target, propName) {
    let previousEl = [];
    if (validateObject[target.constructor.name]) {
        previousEl = validateObject[target.constructor.name][propName] ? validateObject[target.constructor.name][propName] : [];
    }
    validateObject[target.constructor.name] = Object.assign(Object.assign({}, validateObject[target.constructor.name]), { [propName]: [...previousEl, 'positiveNumber'] });
}
const validateObject = {};
function validate(obj) {
    const validateClass = validateObject[obj.constructor.name];
    if (!validateClass) {
        return true;
    }
    let isValid = true;
    for (let prop in validateClass) {
        for (let elem of validateClass[prop]) {
            switch (elem) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'minlength':
                    isValid = isValid && obj[prop].length >= 3;
                    break;
                case 'positiveNumber':
                    isValid = +obj[prop] >= 0;
                    break;
            }
        }
    }
    return isValid;
}
class User {
    constructor(uname, age) {
        this.username = uname;
        this.age = age;
    }
}
__decorate([
    required,
    minlength(3)
], User.prototype, "username", void 0);
__decorate([
    positiveNumber
], User.prototype, "age", void 0);
const u1 = new User('jhon', 28);
const u2 = new User('', -30);
if (validate(u1)) {
    console.log('user created successfully');
}
else {
    alert('Input invalid!');
}
export default undefined;
