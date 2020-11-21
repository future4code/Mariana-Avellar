/* Exercícios de interpretação */


// Exercício 1

// a. false
// b. false
// c. true
// e. boolean


// Exercício 2

// a. undefined
// b. null
// c. 11
// d. 3
// e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
// f. 9



/* Exercícios de escrita */



// Exercício 1 - a, b, c, d


const suaIdade = prompt ("Qual é a sua idade")
const idadeAmigo = prompt ("Qual é a idade do seu/sua melhor amigo/amiga")

let resultado = Number(suaIdade) > Number(idadeAmigo)
console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)

resultado = Number(suaIdade) - Number(idadeAmigo)
console.log("Diferença de idade:", resultado)



// Exercício 2 - a, b, c, d


let nPar = prompt ("Digite um número par")
const numPar = Number(nPar)
console.log(numPar%2)

//todos os restos são zero, pois todos os números pares são divisíveis por 2.
//Quando um número ímpar é inserido ele mostra o resto da divisão, ou seja número inteiro que não conseguiu dividir por 2



// Exercício 3 - a, b, c, d, e, f


let array = []
const listaDeTarefas = array

let tarefa = prompt("Digite uma tarefa do dia-a-dia")
listaDeTarefas.push(tarefa)

tarefa = prompt("Digite outra tarefa do dia-a-dia")
listaDeTarefas.push(tarefa)

tarefa = prompt("Digite mais uma tarefa do dia-a-dia")
listaDeTarefas.push(tarefa)

console.log(listaDeTarefas)

let indice = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2")
listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)




// Exercício 4

const nomeDoUsuario = prompt ("Qual é o seu nome")
const emailDoUsuario = prompt ("Qual é o seu e-mail")

console.log("O email", emailDoUsuario,"foi cadastrado com sucesso. Seja bem vinda(o),", nomeDoUsuario)



/* Exercícios extra */


//Exercício 1 - a, b, c, d


const valorA = (77 - 32)*5/9 + 373.15
console.log (valorA, "Kelvin")

const valorB = (80)*9/5 + 32
console.log (valorB, "ºF")


const valorC1 = (30)*9/5 + 32
const valorC2 = (valorC1 - 32)*5/9 + 373.15
console.log(ValorC1, "ºF", valorC2, "Kelvin")


let converterCelsius = prompt("Insira o grau Celsius que deseja converter")
let valorC1 = (converterCelsius)*9/5 + 32
let valorC2 = (valorC1 - 32)*5/9 + 373.15
console.log(valorC1, "ºF", valorC2, "Kelvin")


// Exercício 2 - a, b


let qtdQuiloWatt = prompt("Digite a quantidade de quilowatt-hora")
const custoQuiloWatt = qtdQuiloWatt*0.05
console.log ("Valor do consumo: R$",custoQuiloWatt)

let qtdQuiloWatt = prompt("Digite a quantidade de quilowatt-hora")
const custoQuiloWatt = (qtdQuiloWatt*0.05)*0.85
console.log ("Valor do consumo: R$",custoQuiloWatt)



// Exercício 3 - a, b, c, d, e, f, g


let quilograma = 20 / 2.205
console.log("20lb equivalem a", quilograma, "Kg")

quilograma = 10 / 35.274
console.log("10oz equivalem a", quilograma, "Kg")

const milha = 100*1609
console.log("100 milhas equivalem a", milha, "metros")

const pes = 50/3.281
console.log("50 ft equivalem a", pes, "metros")

const litro = 103.56*4.546
console.log("103.56 galão imperial equivalem a", litro, "litros")

const litro = 450/3.52
console.log("450 xic equivalem a", litro, "litros")

const pesoKg = prompt ("Digite o valor do peso em Kg")
const kg = pesoKg / 2.205
console.log("20lb equivalem a", kg, "Kg")



