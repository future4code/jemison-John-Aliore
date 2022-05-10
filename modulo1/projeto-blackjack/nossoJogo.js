/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
  let querJogar = (`Olá vamos jogar 21?`)
if(confirm("Olá vamos jogar 21?")){
}
   else{
      console.log("O jogo acabou.")
   
}
let carta = comprarCarta(); 
console.log(carta.texto) 
console.log(carta.valor) 
if(querJogar){
let usuarioCarta = comprarCarta()
let usuarioCarta1 = comprarCarta()
let cartaPC = comprarCarta()
let cartaPC1 = comprarCarta()
let pontuacaoUsuario = usuarioCarta.valor + usuarioCarta1.valor
let pontuacaoPC = cartaPC.valor + cartaPC1.valor

    console.log(`Usuário - cartas:${usuarioCarta.texto} ${usuarioCarta1.texto} - ${pontuacaoUsuario}`)
    console.log(`Computador - cartas:${cartaPC.texto} ${cartaPC1.texto} - ${pontuacaoPC}`)
     
       if(pontuacaoUsuario>pontuacaoPC){
          console.log(`!!!O usuário ganhou!!!`)
       }else if(pontuacaoUsuario<pontuacaoPC)
       
       console.log(`!!!A maquina ganhou!!!`)
      
       else if(pontuacaoPC === pontuacaoUsuario)
       console.log(`!!!EMPATE!!!`)}  

       // DESAFIO
     
