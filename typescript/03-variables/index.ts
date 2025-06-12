let num = 1
num = 10 // let pode ser inicializada e depois modificada pra valores do mesmo tipo
let Num = 'oi' // num é diferente de Num, pois o TypeScript é case sensitive
// num = true -> não compila, pois o valor atribuído não é do mesmo tipo

let qualqer // o tipo é inferido como any, ou seja, pode ser qualquer coisa
qualqer = 1
qualqer = 'oi'

const str = 'hello' // const precisa ser inicializada e não pode ser modificada, caso contrário, não compila
export default undefined;
 // serve para que o compilador não reclame de redeclaração de uma mesma váriavel em vários arquivos
