prompt = require("prompt-sync")();

var num = 1;   // valor apenas para entrar no while
var maior = 0; // valor inicial, apenas para iniciar a variável

while (num != 0) {
  num = parseInt(prompt('Digite um número: '));
  if (num > maior) {
    maior = num;
  }
}

console.log('O maior número digitado foi:', maior);