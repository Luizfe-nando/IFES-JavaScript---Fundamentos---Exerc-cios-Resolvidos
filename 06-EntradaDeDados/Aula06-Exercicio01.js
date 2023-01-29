prompt = require("prompt-sync")();

var salario = parseFloat(prompt("Digite o salario: "))
var ir = parseFloat(prompt("Digite o imposto de renda: "))

var salario_liquido = salario - ir

console.log("O valor do salário liquido é: ", salario_liquido)

