//---------- Exercícios de interpretação de código----------//

// Exercício 1

/*
    O código pede para o usuário inserir a cotação do dólar e tranforma em uma variável tipo número.
    A função é chamada dando o valor 100 de parâmetro para a função, que calcula o valor em reais de 100 dólares.
    IMPRESSÃO CONSOLE: Se o usuário digitar 6, a impressão no console será R$600.
 */


 // Exercício 2

 /*
    O código faz um cálculo para cada tipo de investimento a patir de um valor inicial, então retorna o valor total após o investimento.
    Ao chamar a função o código atribui os parâmetros "Ações" e 150 para a variável novoMontante, como o argumento se encaixa em um case ele retorna o valor 165.
    Já a variável segundoMontante tem um argumento que não se encaixa no case, portanto é retornado uma mensagem com o texto "TIPO DE INVESTIMENTO INFORMADO INCORRETO"
*/


 // Exercício 3

 /*
    O código cria duas arrays vazias e uma array com vários números.
    Ele percorre os itens da array e verifica se o número é par.
    Armazena os números pares na array1 e os ímpares na array2.
    IMPRESSÃO CONSOLE: Quantidade total de números 14 // 6 // 8
 */


 // Exercício 4

 /*
    O código percorre os números de uma array e verifica se o número é menor que o infinito, e se é maior que 0.
    IMPRESSÃO NO CONSOLE: 1590  1590
 */


 //---------- Exercícios de lógica de programação ----------//


 // Exercício 1


 /* Maneira 1
 *
let numeros = 0
 
 while (numeros <= 5) {
    console.log(numeros)
    numeros++
 }
 */


/* Maneira 2
 * 
 for (let num=0; num <=5; num++) {
    console.log(num)
 }
*/


/* Maneira 3
 * 
  const array = [10, 20, 30, 40, 50]
 for (let numero of array) {
    console.log(numero)
 }
 */


 // Exercício 2

 /*
 * a. false
 * b. false
 * c. true
 * d. true
 * e. true
 */ 


 // Exercício 3


/**
 
 let qtdDeNumPares = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
 const n = prompt("Digite um número")

 while (n <= 10) {
    qtdDeNumPares.splice(n, 10-n)
    console.log(qtdDeNumPares)
    n++
 }

 */


 // Exercício 4

 /*

 function trigonometria(a, b, c) {
    if ((a === b) && (b === c)) {
       console.log("Equilátero")
    }
    else if ((a === b) || (b === c) || (a === c)){
      console.log("Isóceles")
    } else {
       console.log("Escaleno")
    }
 }

 trigonometria(10, 10, 20)
 
 */


 // Exercício 5

 /**
  
 const numero1 = prompt("Digite um número")
 const numero2 = prompt("Digite um número")

 if (numero1 > numero2) {
    console.log("O maior é:", numero1)
    console.log("A diferença entre eles é", numero1-numero2)
 } else if (numero2 > numero1) {
      console.log("O maior é:", numero2)
      console.log("A diferença entre eles é", numero2-numero1)
 } 
 
if (numero1 % numero2 === 0) {
 console.log(numero1, "é divisível por ", numero2)
} else if (numero1 % numero2 !== 0) {
   console.log(numero1, "não é divisível por ", numero2)
}

if (numero2 % numero1 === 0) {
   console.log(numero2, "é divisível por ", numero1)
  } else if (numero1 % numero2 !== 0) {
     console.log(numero2, "não é divisível por ", numero1)
  }

*/