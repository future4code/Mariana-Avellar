/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 *  
 */

if (confirm ("Deseja iniciar uma nova rodada?")) {
   
   console.log("Iniciando uma nova rodada.")

// Código que sorteia duas cartas para o usuário e soma sua pontuação

   let cartaUsuario = []
   let pontosUsuario = []
   let carta = comprarCarta();
   cartaUsuario.push(carta);
   pontosUsuario.push(carta.valor);
   carta = comprarCarta();
   cartaUsuario.push(carta);
   pontosUsuario.push(carta.valor);

   let somaUsuario = 0
   let i=0

   for (i=0; i<pontosUsuario.length; i++) {
      somaUsuario += pontosUsuario[i];
   }

   console.log("Usuário - cartas:", cartaUsuario, "- pontuação", somaUsuario)

   // Código que sorteia duas cartas para o computador e soma sua pontuação

   let cartaComputador = []
   let pontosComputador = []
   carta = comprarCarta();
   cartaComputador.push(carta);
   pontosComputador.push(carta.valor);
   carta = comprarCarta();
   cartaComputador.push(carta);
   pontosComputador.push(carta.valor);

   let somaComputador = 0
   let j=0

   for (j=0; j<pontosComputador.length; j++) {
      somaComputador += pontosComputador[j];
   }

   console.log("Computador - cartas:", cartaComputador, "- pontuação", somaComputador)

// Código que compara a pontuação dos jogadores e informa o resultado.

   if (somaUsuario > somaComputador) {
      console.log("O usuário ganhou!")
   }
   else if (somaUsuario < somaComputador) {
      console.log("O computador ganhou")
   }
   else {
      console.log("Empate!")
   }
}

// Encerra o jogo caso o usuário clique em cancelar

else {
    console.log("O jogo acabou.")
}

   
