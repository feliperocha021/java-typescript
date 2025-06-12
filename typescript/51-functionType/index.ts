// Interface atua como um contrato que define a estrutura
// de um objeto e reforça a segurança de tipo
// não tem constructor e não pode ser instanciado

// *Comparações*	   *Interface*	            *Classe Abstrata*
// Implementação	Apenas assinatura	    Pode ter métodos concretos
// Construtor	    Não permitido	        Permitido
// Herança	        Múltiplas interfaces	Apenas uma classe abstrata
// Uso principal	Definir estrutura	    Compartilhar comportamento

type SumFunc1 = (num1: number, num2: number) => number;

let add1: SumFunc1;
add1 = (x: number, y: number):number => x + y;

interface SumFunc2 {
    (num1: number, num2: number): number;
}
let add2: SumFunc2;
add2 = (x: number, y: number):number => x + y;

export default undefined;
