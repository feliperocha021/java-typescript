// Exitem 3 modal windows que são a alert, confirm e prompt

// Alert, usada para mostrar uma mensagem ao usuário e o mesmo não pode interagir com a página até que a mensagem seja fechada

alert('Olá, mundo!');

// Prompt, usada para solicitar uma entrada do usuário. O usuário pode inserir um valor e clicar em 'OK' ou 'Cancelar'. Se o usuário clicar em 'OK', o valor inserido será retornado. Se o usuário clicar em 'Cancelar', o valor retornado será null.
let nome = prompt('Qual é o seu nome?', 'Valor padrão no input');
console.log(nome);

// Confirm, usada para solicitar uma confirmação do usuário. O usuário pode clicar em 'OK' ou 'Cancelar'. Se o usuário clicar em 'OK', o valor retornado será true. Se o usuário clicar em 'Cancelar', o valor retornado será false.
let confirmacao = confirm('Você tem certeza que deseja continuar?');
console.log(confirmacao);

/* Desvantagens dessas janelas:
    não são personalizáveis, não é possível alterar o estilo, a posição ou o comportamento delas.
*/
