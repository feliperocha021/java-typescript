// nullish coalescing operator(??) é um operador que retorna o lado direito se o esquerdo for null ou undefined

const value = null;
const value2 = undefined;
const value3 = ''; // se quisermos retorna a string vazia não será porssível pq ela é false e o || retorna o último false ou o primeiro true

const x = value || 'DEFAULT';
const y = value2 || 'DEFAULT';
const z = value3 || 'DEFAULT';

const a = value ?? 'DEFAULT';
const b = value2 ?? 'DEFAULT';
const c = value3 ?? 'DEFAULT'; // aqui já é possível retoorna a string vazia

console.log(x, y, z);
console.log(a, b, c);

export default undefined;
