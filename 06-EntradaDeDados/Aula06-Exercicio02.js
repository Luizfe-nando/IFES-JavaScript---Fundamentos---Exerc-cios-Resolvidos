prompt = require("prompt-sync")();

var carro = prompt("Digite o nome do carro: ")
var km = parseFloat(prompt("Digite o número de km percorridos: "))
litros = parseFloat(prompt("Digite a quantidade de litros gastos: "))

var consumo = km / litros

console.log("O consumo do carro ", carro, " é de ", consumo, " km/litro")

