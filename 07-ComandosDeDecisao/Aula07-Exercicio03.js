prompt = require("prompt-sync")();

var compra = parseFloat(prompt("Digite o valor da compra em (R$): "));

if (compra <= 1000){
  var desconto = compra * 5 / 100;
}else if ((compra > 1000) && (compra <= 5000)){
  var desconto = compra * 10 / 100;
}else{
  var desconto = compra * 15 / 100;
}
   
console.log("O valor do desconto: R$ " , desconto);

