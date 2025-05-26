function printStaus(message, code) {
    if (typeof code === 'string') { /* é necessário, pois number não possuir a função trim() */
        console.log("".concat(message, ". Status code: ").concat(code.trim()));
    }
    else {
        console.log("".concat(message, ". Status code: ").concat(code));
    }
}
printStaus('User created', ' 200 ');
printStaus('User created', 200);
function roleMessage(role) {
    switch (role) {
        case 'admin':
            return 'You have admin privileges.';
        case 'user':
            return 'You are a registered user.';
        case 'guest':
            return 'You are a guest.';
        default:
            return 'Unknown role';
    }
}
console.log(roleMessage('admin')); // Output: You have admin privileges.
console.log(roleMessage('user')); // Output: You are a registered user.
console.log(roleMessage('guest')); // Output: You are a guest.
function printUser(user) {
    console.log("User: ".concat(user.firstName, " ").concat(user.lastName, ", Age: ").concat(user.age, ", Role: ").concat(user.role));
}
var user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    role: 'admin'
};
printUser(user); // Output: User: John Doe, Age: 30, Role: admin
