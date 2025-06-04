// const ADMIN = 0;
// const READ_ONLY = 1;
// const WRITE_ONLY = 2;
// const READ_WRITE = 3;

enum Roles {
    ADMIN,
    READ_ONLY,
    WRITE_ONLY,
    READ_WRITE
}

const user  = {
    name: 'John',
    age: 30,
    gender: 'male',
    role: Roles.ADMIN
}

if (user.role === Roles.ADMIN) {
    console.log('User is an admin');
}
export {}; // serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
