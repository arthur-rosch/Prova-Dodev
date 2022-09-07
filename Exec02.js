// 2. Escreva uma função que recebe, por parâmetro, um valor inteiro e positivo e retorna
// o somatório de 1 até esse valor. Ex.: Entrada = 5 a função tem que retornar o total
// de 1 + 2 + 3 + 4 + 5
let choice = true;
while (choice) {
  let number = Number(prompt("Digite um valor inteiro e positivo"));
  if (number >= 0) {
    console.log(Sum(number));
    choice = false;
  } else {
    alert("Numero Invalido, Insira um Numero Positivo e Inteiro");
  }

  function Sum(numberParameters) {
    let result = 1;
    for (let index = 1; index < numberParameters; index++) {
      result += index + 1;
    }
    return result;
  }
}
