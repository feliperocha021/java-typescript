import { createUser, getUsers } from './user-action';

const u1 = createUser('jhon', 28, 'male');
console.log(getUsers());
console.log('App is running...');