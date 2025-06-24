function required(target: object, propName: string) {
    let previousEl: string[] = [];
    if(validateObject[target.constructor.name]) {
        previousEl = validateObject[target.constructor.name][propName] ? validateObject[target.constructor.name][propName] : [];
    }
    validateObject[target.constructor.name] = {
        ...validateObject[target.constructor.name],
        [propName]: [...previousEl, 'required']
    }
}

function minlength(length: number) {
    return function(target: object, propName: string) {
        let previousEl: string[] = [];
        if(validateObject[target.constructor.name]) {
            previousEl = validateObject[target.constructor.name][propName] ? validateObject[target.constructor.name][propName] : [];
        }
        validateObject[target.constructor.name] = {
            ...validateObject[target.constructor.name],
            [propName]: [...previousEl, 'minlength']
        }
    }
}

function positiveNumber(target: object, propName: string) {
    let previousEl: string[] = [];
    if(validateObject[target.constructor.name]) {
        previousEl = validateObject[target.constructor.name][propName] ? validateObject[target.constructor.name][propName] : [];
    }
    validateObject[target.constructor.name] = {
        ...validateObject[target.constructor.name],
        [propName]: [...previousEl, 'positiveNumber']
    }
}

interface Ivalidator {
    [prop: string]: {
        [propKey: string]: string[]; // ['required', 'minlength']
    }
}

const validateObject: Ivalidator = {};

function validate(obj: Record<string, any>): boolean {
    const validateClass = validateObject[obj.constructor.name];
    if(!validateClass) {
        return true;
    }

    let isValid = true;
    for(let prop in validateClass) {
        for(let elem of validateClass[prop]) {
            switch(elem) {
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
    @required
    @minlength(3)
    username: string;

    @positiveNumber
    age: number;

    constructor(uname: string, age: number) {
        this.username = uname;
        this.age = age;
    }
}

const u1 = new User('jhon', 28);
const u2 = new User('', -30);

if(validate(u1)) {
    console.log('user created successfully');
} else {
    alert('Input invalid!');
}

export default undefined;