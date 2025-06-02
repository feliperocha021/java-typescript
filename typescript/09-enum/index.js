"use strict";
// const ADMIN = 0;
// const READ_ONLY = 1;
// const WRITE_ONLY = 2;
// const READ_WRITE = 3;
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
    Roles[Roles["WRITE_ONLY"] = 2] = "WRITE_ONLY";
    Roles[Roles["READ_WRITE"] = 3] = "READ_WRITE";
})(Roles || (Roles = {}));
const user = {
    name: 'John',
    age: 30,
    gender: 'male',
    role: Roles.ADMIN
};
if (user.role === Roles.ADMIN) {
    console.log('User is an admin');
}
