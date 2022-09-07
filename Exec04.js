// 4. Faça uma função que recebe 3 valores inteiros por parâmetro e retorna-os em um
// array ordenado em ordem crescente.

let numberA = Number(prompt("Escolha o Primeiro Numero:")),
  numberB = Number(prompt("Escolha o Segundo Numero:")),
  numberC = Number(prompt("Escolha o Terceiro Numero:"));

sortingNumber(numberA, numberB, numberC);

function sortingNumber(A, B, C) {
  let array = [];
  if (A > B) {
    if (B > C) {
      array = [A, B, C];
    } else {
      if (A > C) {
        array = [A, C, B];
      } else {
        array = [C, A, B];
      }
    }
  } else {
    if (B > C) {
      if (A > C) {
        array = [B, A, C];
      } else {
        array = [B, C, A];
      }
    } else {
      array = [C, B, A];
    }
  }
  return console.log(array);
}
