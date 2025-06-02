// () -> x**y -> x*y ou x/y -> x+y ou x-y -> x<y ou x>y -> x<=y ou x>=y -> x==y ou x!=y -> x===y ou x!==y -> x&&y -> x||y -> !x
let result = 2 + 3 * 4 - 5 / 2 ** 3;
console.log(result); // 13.375

let a = 10;
let b = 12;

let expression = 10 + 23 || 20 + ++a + b-- * 2 && null; /*ordem de precedência: -> 
                                                        10 + 23 || 20 + ++a + 12 * 2 && null  -> 
                                                        10 + 23 || 20 + 11 + 12 * 2 && null -> 
                                                        10 + 23 || 20 + 11 + 24 && null -> 
                                                        33 || 55 && null -> 
                                                        33 || 0 ->
                                                        33  */
console.log(expression); // 33
console.log(a); // 10
console.log(b); // 12

// a e b não foram alterados porque o operador || retornou o primeiro valor verdadeiro (10 + 23) e não executou o restante da expressão.
