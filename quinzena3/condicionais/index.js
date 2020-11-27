// Exercício 1

/*
Esse código verifica se um número é par ou ímpar. Se o resto da divisão do número
inserido pelo usuário for 0, então o número é par, caso contrário, o número é ímpar.
*/


// Exercício 2

/*
a. O código acima solicita que o usuário informe uma fruta e retorna o preço dessa fruta.
b. O preço da fruta Maçã é R$2.25
c. O preço da fruta Pêra é R$5
 */


 // Exercício 3

 /*
 a. A primeira linha pede para o usuário inserir um valor numérico e transforma a variável para o tipo número.
 b. 10: Esse número passou no teste. Essa mensagem é secreta / -10: undefined 
 c. O console.log que imprime a variável mensagem está fora do bloco, ou seja fora da chaves {}.
 Isso faz com que a variável mensagem não tenha um valor definido.
 */


// Exercício 4

/*
let idade = Number(prompt("Qual é sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log ("Você não pode dirigir")
}
*/


// Exercício 5

/*
let turnoEscolar = prompt("Escolha seu turno: m (matutino), v (vespertino) ou n (noturno")

if (turnoEscolar === "m") {
    console.log("Bom dia!")
} else if (turnoEscolar === "v") {
    console.log("Boa tarde!")
} else if (turnoEscolar === "n") {
    console.log("Boa noite!")
} else {
    console.log("Digite a letra correta para continuar.")
}
*/


// Exercício 6

/*
let turno = prompt("Escolha seu turno: m (matutino), v (vespertino) ou n (noturno")

switch (turno) {
    case "m":
        console.log("Bom dia!")
        break;
    case "v":
        console.log("Boa tarde!")
        break;
    case "n":
        console.log("Boa noite!")
        break;
    default:
        console.log("Digite a letra correta para continuar.")
        break;
}
*/


// Exercício 7

/*
let genero = prompt("Digite o gênero do filme que deseja assistir")
let preco = Number(prompt("Digite o preço do ingresso"))

if (genero === "fantasia" && preco < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme")
}
*/