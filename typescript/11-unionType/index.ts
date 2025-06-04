// Usado para especificar que um parâmetro de função pode ser de mais de um tipo ou o retorno pode ser um dos vários tipos	

let user: {name: string, age: number} | null

function getUser() {
    const uname = 'John Doe';
    const uage = 30;
    user = { name: uname, age: uage };
    return user;    
}

console.log(getUser());

function printStaus(message: string, code: string | number) {
    if (typeof code === 'string') { /* é necessário, pois number não possuir a função trim() */
        console.log(`${message}. Status code: ${code.trim()}`);
    }
    else {
        console.log(`${message}. Status code: ${code}`);
    }
}
printStaus('User created', ' 200 ');
printStaus('User created', 200);
export {}; // serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
