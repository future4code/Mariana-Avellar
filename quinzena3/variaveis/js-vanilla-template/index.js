/* Excercício 1
10 10 5
*/


/* Excercício 2
20 10 10
*/


//Exercício 1 - a, b, c, d, e, f



const primeiroNome = ""
const idade = null

console.log(typeof primeiroNome)
console.log(typeof idade)


//String - impresso pois mesmo sem valor ainda está com as aspas.
//Undefined - impresso pois não possuia nada que indicasse o tipo da variável e não tinha nenhum valor, nem mesmo o null


const primeiroNome = prompt("Qual é o seu nome")
const idade = prompt("Qual é sua idade")

console.log(typeof primeiroNome)
console.log(typeof idade)

console.log("Olá", primeiroNome,", você tem", idade, "anos.")

//Notei que me retornou duas strings, mesmo que um valor numérico fosse inserido.


//Exercício 2


const endereco = prompt("Qual seu endereço?")
console.log(endereco)

const cor = prompt("Qual sua cor favorita?")
console.log(cor)

const cidade = prompt("Qual é sua cidade?")
console.log(cidade)

const filme = prompt("Qual seu filme preferido?")
console.log(filme)

const idade = prompt("Qual é sua idade?")
console.log(idade)


//Exercício 3 - a, b, c


let array = ["frutas","legumes","verduras","vegetais","massas"]
console.log(array)

console.log("Essas são minhas comidas favoritas:")
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

const comidaFavorita = prompt("Qual é sua comida favorita?")
console.log(array[0])
console.log(comidaFavorita)
console.log(array[2])
console.log(array[3])
console.log(array[4])


// Exercício 4 - a, b

const perguntas = ["Você tomou café hoje?", "Você dirigiu ontem?", "Você está usando vestido?" ]

const respostas = [true, false, false]

console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])
