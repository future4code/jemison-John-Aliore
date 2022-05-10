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

 let usuario = []
let pc = []

if (confirm(`Bem vindos ao jogo 21` + `\n` + `Gostaria de jogar uma rodada?`)){

let cartasSortidas = false
while(!cartasSortidas){
   usuario.push(comprarCarta())
   usuario.push(comprarCarta())
   pc.push(comprarCarta())
   pc.push(comprarCarta())
   if ((usuario[0].valor === 11 && usuario[1].valor === 11) ||
         (pc[0].valor === 11 && pc[1].valor === 11)) {
            usuario = []
            pc = []
} else {
   cartasSortidas = true
}
}
let aceitarCarta = true

while(aceitarCarta){
      let mensagem = ""
      let pontuacao = 0
      for (let carta of usuario){
            mensagem += carta.texto + " "
            pontuacao += carta.valor

      }

if (pontuacao > 21){
   aceitarCarta = false
} else{
   let confirmarCarta = confirm(
      `Suas cartas são ${mensagem}. A carta revelada do PC é ${pc[0].texto}.`+"\n"+"Deseja comprar mais uma carta?"

   )
   
if (confirmarCarta){
   usuario.push(comprarCarta())
} else {
   aceitarCarta = false
}
}
}

let pontosPC = 0
let pontosUsuario = 0
let mensagemPC = ""
let mensagemUsuario = ""

for (let carta of pc){
   pontosPC += carta.valor
   mensagemPC += carta.texto + " "
}
for (let carta of usuario){
   pontosUsuario += carta.valor
   mensagemUsuario += carta.texto + " "
}

if (pontosUsuario <= 21){
   while (pontosPC < pontosUsuario && pontosPC <= 21){
      pc.push(comprarCarta())
      pontosPC = 0
      mensagemPC = ""
      for (let carta of pc){
         pontosPC += carta.valor
         mensagemPC += carta.texto + " "
      }
   }
}

let resultado = ""

if (pontosUsuario > pontosPC && pontosUsuario <= 21){
   resultado = "O usuário ganhou!"
} else if (pontosPC > pontosUsuario && pontosPC <= 21){
   resultado = "O computador ganhou!"
} else if (pontosPC > 21 && pontosUsuario <= 21){
   resultado = "O usuário ganhou!"
} else if (pontosUsuario > 21 && pontosPC <= 21){
   resultado = "O computador ganhou!"
} else {
   resultado = "Empate!"
}
alert(
   `Usuario - Cartas: ${mensagemUsuario} - Pontuação: ${pontosUsuario}` + 
   "\n" + 
   `Computador - Cartas: ${mensagemPC} - Pontuação: ${pontosPC}` + 
   "\n" + 
   resultado
)

} else {
alert("O jogo acabou.")
}