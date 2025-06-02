let globalVariable = "I am global"; // Global variable

function greet(name, timeOfDay) {
  // Local variable
  let greeting = `Good ${timeOfDay}, ${name}!`;

  function displayGreeting() {
    console.log(greeting); // Accessing the local variable
  }
  displayGreeting();
  // Accessing the global variable
  console.log(globalVariable + ' acess in function'); // Output: I am global
}  
greet("Alice", "morning"); // Output: Good morning, Alice!
console.log(globalVariable); // Output: I am global
console.log(greeting); // Erro a variável greeting não é acessível aqui, pois é local à função greet
displayGreeting(); // Error: displayGreeting não é acessível aqui, pois é local à função greet
