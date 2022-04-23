// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt("Por favor digite a altura de um retangulo")
const largura = prompt("Por favor agora digite a largura")

areaRetangulo = altura*largura 

console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual =prompt("Por favor digite o seu ano atual")
  let anoDeNascimento = prompt("Por favor digite o ano em que nasceu")
  
  idade = anoAtual-anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 
  const NOME = prompt(`nome`)
  const IDADE = prompt(`idade`)
  const EMAIL = prompt(`email`)
  
  const frase = (`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL}.`)
  
  console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  alert("Quais suas 3 cores favoritas?")
  let cor1 = prompt("cor1")
  let cor2= prompt("cor2")
  let cor3= prompt("cor3")
  
  console.log([cor1,cor2,cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const minuscula = prompt("digite oi")
const maiuscula = minuscula.toUpperCase()

const fruta = prompt("digite banana")
const frutaMaior = fruta.toUpperCase()

console.log([maiuscula])

console.log([frutaMaior])

return maiuscula,frutaMaior


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo,valorIngresso) {
  // implemente sua lógica aqui
 let custoDoShoW = Number =  prompt("Digite o custo")

 let valorDaEntraDa = Number = prompt("Digite o valor do ingresso")

 let resultado = Number = custoDoShoW / valorDaEntraDa


console.log(resultado) 
return resultado

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

let primeiroItem = array[0]
return primeiroItem
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let ultimoElemento = array[1]

return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
array.pop(1)
array.push(0)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return !false



}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}