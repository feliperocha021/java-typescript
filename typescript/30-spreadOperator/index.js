"use strict";
// permite extrair elementos de array ou de um objeto
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var users = ['jhon', 'mark', 'merry'];
console.log(users);
console.log.apply(console, users);
// fazer cópias sem  as mesmas referências
var copyUsers = __spreadArray([], users, true);
console.log(copyUsers);
// criar extensões de um array
var extendUsers = __spreadArray(['ravi', 'steve'], users, true);
console.log(extendUsers);
// extrair propriedades de um objeto
var person = {
    fname: 'jhon',
    age: 28,
    gender: 'male'
};
var eemployee = __assign(__assign({}, person), { salary: 1200, company: 'Google' });
console.log(eemployee);
