// Crie um array com 10 elementos. Faça uma função que recebe dois valores como
// parâmetro o Limite Inferior e o Limite Superior, depois exiba no console somentos
// os valores do array que são maiores ou iguais que o Limite Inferior e menores ou
// iguais ao Limite Superior.
// Ex.:
// array = [4,6,7,8,9,10,12,13,14,15]
// Limite Inferior = 5
// Limite Superior = 13
// Deve ser exibido no console, apenas os valores 6,7,8,9,10,12,13
const array = [4, 6, 7, 8, 9, 10, 12, 13, 14, 15],
  limiteMin = Number(prompt("Escolha um Valor Mínimo")),
  limiteMax = Number(prompt("Escolha um Valor Máximo"));

sortingArray(array, limiteMin, limiteMax);

function sortingArray(arrayParameters, MinParameters, MaxParameters) {
  let newArray = [],
    indexArray = 0;
  for (let index = 0; index < arrayParameters.length; index++) {
    if (
      arrayParameters[index] <= MaxParameters &&
      arrayParameters[index] >= MinParameters
    ) {
      newArray[indexArray] = arrayParameters[index];
      indexArray++;
    }
  }
  return console.log(newArray);
}
