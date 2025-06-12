// O valor que atribui o tipo literal a uma variável é o valor que ela recebe.
const srt = 'Hello World';
let srt2 = 'Hello World';
console.log(typeof srt); // Output: string
console.log(typeof srt2); // Output: string

function roleMessage(role: 'admin' | 'user' | 'guest') {
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
//console.log(roleMessage('superuser')); // Error: Argument of type '"superuser"' is not assignable to parameter of type '"admin" | "user" | "guest"'.
export default undefined;
 // serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
