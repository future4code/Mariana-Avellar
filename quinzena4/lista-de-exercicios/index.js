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


//---------- Exercícios de funções ----------//


// Exercício  1

/* 
*

function arrayDeNumeros() {

   const array = [10, 20, 30, 40, 50]

   let maiorNumero = 0
   let menorNumero = Infinity
   let segundoMaiorNumero = 0
   let segundoMenorNumero = Infinity
   

   for (let i=0; i < array.length; i++) {
     if (array[i] > maiorNumero) {
        maiorNumero = array[i]
     }
   }

   for (let i=0; i < array.length; i++) {
      if (array[i] < menorNumero) {
         menorNumero = array[i]
      }
    }

   for (let i=0; i < array.length; i++) {
      if ((array[i] < maiorNumero) && (array[i] >= segundoMaiorNumero)) {
         segundoMaiorNumero = array[i]
      }
    }

   for (let i=0; i < array.length; i++) {
      if ((array[i] > menorNumero) && (array[i] <= segundoMenorNumero)) {
         segundoMenorNumero = array[i]
      }
    }
   
    console.log(maiorNumero, segundoMaiorNumero)
    console.log(menorNumero, segundoMenorNumero)
}

arrayDeNumeros()

*/


// Exercício 2

/*

let funcaoAlert = () => {
   return alert("Hello Future4");
}

funcaoAlert()

*/


//---------- Exercícios de objetos ----------//


// Exercício 1

/**
 * Objetos são como arrays mais complexas, são compartimentos onde podemos guardar tipos diferentes de coisas em um mesmo lugar.
 * Podemos utilizar os objetos quando queremos guardar várias informações como números, strings e boleeans, para mais tarde utilizar cada uma de suas propriedades quando necessário.
 * Arrays também armazenam um conjunto de informações como um objeto, porém podemos armazenar apenas um tipo de informação, número ou string ou boleean.
 * Podemos usar as arrays para armazenar várias informações do mesmo tipo, para que possamos acessar seus itens sempre que necessário.
 */


 // Exercício 2

 /*

 function criaRetangulo(lado1, lado2) {
      let objeto = {
         largura: lado1,
         altura: lado2,
         perimetro: 2*(lado1+lado2),
         area: lado1*lado2
      }
      return objeto;
 }

 let resultado = criaRetangulo(20, 40)
 console.log(resultado)

 */


 // Exercício 3

/*

const filmeFavorito = {
    titulo: "Edward mãos de tesoura",
    ano: 1990,
    diretor: "Tim Burton",
    atores: ["Jhonny Depp", "Winona Ryder"]
}

   console.log("Venha assistir ao filme ", filmeFavorito.titulo, "de ", filmeFavorito.ano, "dirigido por ", filmeFavorito.diretor, "e estrelado por ", filmeFavorito.atores[0], "e ", filmeFavorito.atores[1])
 
*/


// Exercício 4

/*

let infoPessoal = {
   nome: "Mariana",
   idade: 31,
   email: "mariana@gmail.com",
   endereco: "Rua das Marmotas, 123"
}

function anonimizarPessoa() {
   const infoAnonima = {
      ...infoPessoal,
      nome: "ANÔNIMO"
   }
   console.log(infoAnonima)
}

anonimizarPessoa()
console.log(infoPessoal)

*/

//---------- Exercícios de funções de arrays ----------//
// FALTA COMMITAR

//Exercício 1

/**
 * a.

   const arrayA = [
	{nome: "Pedro", idade:20},
	{nome: "João", idade:10},
	{nome: "Paula", idade:12},
	{nome: "Artur", idade:89} 
]

const arrayAdultos = arrayA.filter((pessoa, index, listaPessoas) => {
      if (pessoa.idade >= 20) {
         return true
      }
      return false
})

console.log(arrayAdultos)

*/


/**
 * b.

   const arrayB = [
	{nome: "Pedro", idade:20},
	{nome: "João", idade:10},
	{nome: "Paula", idade:12},
	{nome: "Artur", idade:89} 
]

const arrayCriancas = arrayB.filter((pessoa, index, listaPessoas) => {
      if (pessoa.idade < 20) {
         return true
      }
      return false
})

console.log(arrayCriancas)

*/


// Exercício 2

/**
 * a.

const array = [1, 2, 3, 4, 5, 6]

const multiplicaPorDois = array.map((numero, index, listaNumeros) => {
   return listaNumeros[index]*2
})

console.log(multiplicaPorDois)

*/

/**
 * b.

const array = [1, 2, 3, 4, 5, 6]

const multiplicaPorTres = array.map((numero, index, listaNumeros) => {
   return `${numero*3}`
})

console.log(multiplicaPorTres)

*/


/**
 * c.
 
const array = [1, 2, 3, 4, 5, 6]

const numPar = array.map((numero, index1, arrNumeros1) => {
   if (numero % 2 === 0) {
      return `${numero} é par`
   }
})

console.log(numPar)

const numImpar = array.map((num, index2, arrNumeros2) => {
   if (num % 2 !== 0) {
      return `${num} é ímpar`
   }
})

console.log(numImpar)

*/


// Exercício 3


/**
 * a.
 
const pessoas = [
	{nome: "Paula", idade: 12, altura: 1.8},
	{nome: "João", idade: 20, altura: 1.3},
	{nome: "Pedro", idade: 15, altura: 1.9},
	{nome: "Luciano", idade: 22, altura: 1.8},
	{nome: "Artur", idade: 10, altura: 1.2},
	{nome: "Soter", idade: 70, altura: 1.9}
]

const pessoasAutorizadas = pessoas.filter((pessoa, index, listaPessoas) => {
   if ((pessoa.altura >= 1.5) && (pessoa.idade > 14) && (pessoa.idade < 60)) {
      return true
   }
   return false
})

console.log(pessoasAutorizadas)

*/


/**
 * b.

const pessoas = [
	{nome: "Paula", idade: 12, altura: 1.8},
	{nome: "João", idade: 20, altura: 1.3},
	{nome: "Pedro", idade: 15, altura: 1.9},
	{nome: "Luciano", idade: 22, altura: 1.8},
	{nome: "Artur", idade: 10, altura: 1.2},
	{nome: "Soter", idade: 70, altura: 1.9}
]

const pessoasNaoAutorizadas = pessoas.filter((pessoa, index, listaPessoas) => {
   if ((pessoa.altura >= 1.5) && (pessoa.idade > 14) && (pessoa.idade < 60)) {
      return false
   }
   return true
})

console.log(pessoasNaoAutorizadas)

*/


// Exercício 4


/*
*
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const consultasMarcadas = consultas.map((paciente, index, listaPacientes) => {
   if ((paciente.cancelada = false) && (paciente.genero === "feminino")) {
      
      return `Olá, Sra. ${paciente.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
   } else {
      return `Olá, Sr. ${paciente.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
   }
})


const consultasCanceladas = consultas.map((paciente, index,listaPacientes) => {
   if ((paciente.cancelada = true) && (paciente.genero === "feminino")) {
      
      return `Olá, Sra. ${paciente.nome}. Infelizmente, sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em  contato conosco para remarcá-la`
   } else {
      
      return `Olá, Sr. ${paciente.nome}. Infelizmente, sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em  contato conosco para remarcá-la`
   }
})

console.log(consultasMarcadas)
console.log(consultasCanceladas)

*/


// Exercício 5

/*
*

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((clientes, index, listaClientes) => {
   let somaCompras = 0
   for (let i=0; i< clientes.compras.length; i++) {
      somaCompras += clientes.compras[i]
      clientes.saldoTotal -= clientes.compras[i]
   }
   clientes.saldoTotal -= somaCompras 
})

console.log(contas)

*/


