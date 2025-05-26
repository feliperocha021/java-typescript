// Usado para especificar que um parâmetro de função pode ser de mais de um tipo ou o retorno pode ser um dos vários tipos	
var user;
function getUser() {
    var uname = 'John Doe';
    var uage = 30;
    user = { name: uname, age: uage };
    return user;
}
console.log(getUser());
function printStaus(message, code) {
    if (typeof code === 'string') {
        console.log("".concat(message, ". Status code: ").concat(code.trim()));
    }
    else {
        console.log("".concat(message, ". Status code: ").concat(code));
    }
}
printStaus('User created', ' 200 ');
printStaus('User created', 200);
