import * as Actions from '../86-es6Module/user-action.js';

import { User as U} from '../86-es6Module/user.js';

// importões de export default não precisam de chave
import persons, { PI } from './user.js';

let userList: U[] = []

const u1 = Actions.createUser('jhon', 28, 'male');
console.log(Actions.getUsers());