// 1. Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o
// valor lógico “true”caso o valor seja par, e “false” caso seja ímpar.

let choice = true;
while (choice) {
  let numero = Number(prompt("Escolha um Numero Inteiro: "));
  if (numero >= 0) {
    checkNumber(numero);
    choice = false;
  } else {
    alert("Escolha um Numero Positivo e Inteiro:");
  }
}

function checkNumber(numberParameters) {
  if (numberParameters % 2 == 0) {
    return console.log("True");
  } else {
    return console.log("False");
  }
}
