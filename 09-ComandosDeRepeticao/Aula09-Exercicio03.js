prompt = require("prompt-sync")();

var soma = 0;
var continua = "s";

while (continua == "s") {
  let num = parseInt(prompt('Digite um número: '));
  soma = soma + num;
  continua = prompt('Você deseja continuar (s/n): ');
}

console.log('A soma é:', soma);