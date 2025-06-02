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
function completeHomeWork() {
    console.log('Homework completed');
}
doHomeWork('math', completeHomeWork); // chama a função doHomeWork com o assunto 'math' e a função completeHomeWork como callback

// uma função anônima é uma função que não tem nome e é definida no local onde é usada. Ela pode ser usada como uma função de retorno de chamada ou como uma função de ordem superior.
//só pode ser chamada dentro do escopo onde foi definida, ou seja, não pode ser chamada fora da função que a define.
doHomeWork('english', function() {
    console.log('English homework completed');
}); // chama a função doHomeWork com o assunto 'english' e uma função anônima como callback