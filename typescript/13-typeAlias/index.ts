type StringOrNumber = string | number;
type RolesTypes = 'admin' | 'user' | 'guest';
type UserType = {firstName: string, lastName: string, age: number, role: RolesTypes};

function printStaus(message: string, code: StringOrNumber) {
    if (typeof code === 'string') { /* é necessário, pois number não possuir a função trim() */
        console.log(`${message}. Status code: ${code.trim()}`);
    }
    else {
        console.log(`${message}. Status code: ${code}`);
    }
}
printStaus('User created', ' 200 ');
printStaus('User created', 200);

function roleMessage(role: RolesTypes) {
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

function printUser(user: UserType) {
    console.log(`User: ${user.firstName} ${user.lastName}, Age: ${user.age}, Role: ${user.role}`);
}

let user: UserType = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    role: 'admin'
}

printUser(user); // Output: User: John Doe, Age: 30, Role: admin
export {}; // serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
