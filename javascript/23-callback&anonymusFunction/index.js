// em javascript, uma função é um objeto de primeira classe, o que significa que pode ser passada como argumento para outras funções, retornada de outras funções e atribuída a variáveis.
// uma função de retorno de chamada (callback) é uma função que é passada como argumento para outra função e é executada após a conclusão dessa função.
//os callbacks são uma forma de garantir que um determinado código não seja executado até que uma operação assíncrona seja concluída, como uma requisição a um servidor ou a leitura de um arquivo.
function first() {
    setTimeout(function(){
        console.log('first function called');
    }, 1000);
}

function second() {
    console.log('second function called');
}

first(); // chama a primeira função, que executa uma função anônima após 1 segundo
second(); // chama a segunda função imediatamente

function doHomeWork(subject, callback) {
    console.log(`Starting my ${subject} homework`);
    callback();
}
function statusHomeWork(status) {
    console.log(`Homework ${status}`);
}

/* Contexto (this): O primeiro argumento de bind() é o contexto que a função deve usar quando for executada. No caso, null é passado como contexto, o que significa que a função não precisa deles ou não dependerá de this.

Pré-definição do Parâmetro: O segundo argumento, 'completed', é o valor que será sempre passado como primeiro parâmetro para a função statusHomeWork.
 */
doHomeWork('math', statusHomeWork.bind(null, 'completed')); // chama a função doHomeWork com o assunto 'math' e a função completeHomeWork como callback

// uma função anônima é uma função que não tem nome e é definida no local onde é usada. Ela pode ser usada como uma função de retorno de chamada ou como uma função de ordem superior.
//só pode ser chamada dentro do escopo onde foi definida, ou seja, não pode ser chamada fora da função que a define.
doHomeWork('english', function() {
    console.log('English homework completed');
}); // chama a função doHomeWork com o assunto 'english' e uma função anônima como callback

//Exemplo usando o primeiro argumento de bind
const usuario = {
  nome: 'Felipe',
  cumprimentar: function(saudacao, pontuacao) {
    console.log(saudacao + ', ' + this.nome + pontuacao);
  }
};

// Sem bind, 'this' dentro de cumprimentar não seria o objeto 'usuario', a função é chamada como uma função comum, não como um método do objeto usuario
setTimeout(usuario.cumprimentar, 1000); // Pode imprimir "undefined"

// Com bind, fixamos o contexto e pré-definimos o parâmetro saudacao
setTimeout(usuario.cumprimentar.bind(usuario, 'Olá'), 1000); // Imprime "Olá, Felipe"
