// 3. Faça uma função que receba dois valores como parâmetro A e B. Se A for par e B
// maior que 5 retorne o valor lógico “true” senão retorna “false”
const numberA = Number(prompt("Escolha um Numero"));
const numberB = Number(prompt("Escolha outro Numero"));
checkNumber(numberA, numberB);

function checkNumber(A, B) {
  if (A % 2 == 0 && B > 5) {
    return console.log("True");
  } else {
    return console.log("False");
  }
}
