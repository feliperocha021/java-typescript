// O decorator de parâmetro recebe: 
// - target: object. Se o método for estático, target: Function é a função construtora
// - propertyKey: nome do método onde o parâmetro está definido.
// - indexParam: índice do parâmetro.
function param(target: object, propertyKey: string, indexParam: number) {
  console.log(
    `Parametro decorado no método "${propertyKey}" no índice ${indexParam}.`
  );
}

// O decorator de método intercepta a chamada do método decorado.
// Ele recebe:
// - target: objeto (prototype se método de instância; função construtora se estático).
// - methodName: nome do método.
// - descriptor: descriptor da propriedade (com o método original).
function Logger(target: object, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`[Logger] Chamando o método "${methodName}" com argumentos:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`[Logger] Resultado do método "${methodName}":`, result);
    return result;
  };
}

class Person {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // O decorator @Logger intercepta a chamada de calculateAge.
  // O decorator @param (aplicado ao parâmetro "dob") será executado quando a classe for definida.
  @Logger
  calculateAge(@param dob: string) {
    // Exemplo simples: calcula a idade com base no ano de nascimento.
    // Para efeito de exemplo, vamos usar o ano atual.
    const birthYear = new Date(dob).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }
}

const p = new Person('jhon');
p.calculateAge('06-15-1998');

export default undefined;
