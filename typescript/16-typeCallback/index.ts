function getResult(num1: number, num2: number, print: (str: string, n: number) => void): void {
  const result = num1 + num2;
  print('The result is ', result);
}

function display(msg: string, result: number): void {
    console.log(msg + result);
}

getResult(5, 10, display);