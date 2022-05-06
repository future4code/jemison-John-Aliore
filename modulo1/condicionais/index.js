/*(1)exercicios de analise

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
/*a) Explique o que o código faz. Qual o teste que ele realiza? 
res:o código vê quais numeros são divisiveis por (2)
b) Para que tipos de números ele imprime no console "Passou no teste"? 
res:todo numero par ele vai imprimir passou no teste
c) Para que tipos de números a mensagem é "Não passou no teste"?
res:para os numeros impares
*/

/*(2) O código abaixo foi feito por uma pessoa desenvolvedora, 
contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/
/*a) Para que serve o código acima?
conferir preco,dos produtos no supermercado
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preco da fruta , maca, é , 2.25
c) Considere que um usuário queira comprar 
uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` 
que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
O preco da fruta Pera é 5.5
*/
/*(3)Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?
ele criou uma variavel e está guardando o numero que o usuario digitar nessa variavel
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
a mensagem no terminal sera "Esse número passou no teste" e a outra será "Essa mensagem é secreta!!!"
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
o erro será que o dev está tentando imprimir fora da condicao criada e fora da condicao a variavel escrita
no console nao existe

*/

/*
- **Exercícios de escrita de código**
    1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
    (apenas maiores de idade).
        
        a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        
        b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
        c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
        imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`*/

        /*let idade = Number (prompt("Qual a sua idade?"))

        function permissaoParaDirigir(idade){
            if(idade>=18)
            console.log(`"Você pode dirigir"`)
            else{
                console.log(`"Você não pode dirigir"`)
            }
        }
permissaoParaDirigir(idade)

/*        
    
       /*  2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
       Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). 
       Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`*/

     /* let turnoDeAula = prompt(`"Qual horario de aula você estuda?Digite (M)matutino,(V)vespertino,(N)noturno"`)
      function horario(turnoDeAula) {
          if(turnoDeAula === "M") {
              console.log(`"Bom Dia"`)}
              else if(turnoDeAula ==="V"){
                  console.log(`"Boa Tarde`)}
                  if(turnoDeAula === "N"){
                      console.log(`"Boa Noite"`)}}
      horario(turnoDeAula)/*
            
            
      (3). Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.*/
      /*let turnoDeAula = prompt(`"Qual horario de aula você estuda?Digite (M)matutino,(V)vespertino,(N)noturno"`)
      function horario(turnoDeAula) {
       switch (turnoDeAula) {
           case "M":
            console.log(`"Bom Dia"`)
               break;
       case "V":
       console.log(`"Boa Tarde`)
       break;
       case "N":
        console.log(`"Boa Noite"`)
           break;
           default:
               console.log(`!!!!!DIGITOU ERRADO DIGITE NOVAMENTE!!!!!`)
               break;
       }}
       horario(turnoDeAula)*/
       /*4. Considere a situação: você vai ao cinema com um amigo ou amiga,
     porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais.
      Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
      então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo,
     imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme*/
     
     /*let listaDeFilmes = alert`lista de filmes disponiveis hoje:
     harry potter 25$
     (Fantasia,Aventura)
     Mercenarios 3 20$
     (Ação)
     A fantastica Fabrica de Chocolate 15$
     (fantasia)`
     let cinema = prompt(`"Qual fime vocês assistiram hoje?`).toLocaleLowerCase()
     function filmeEscolhido(cinema){
    if(cinema === "harry potter"){
    console.log(`"Escolha outro filme!"`)}
    else if(cinema === "mercenarios 3"){
        console.log(`"Escolha outro filme!"`)
    }else if(cinema === "a fantastica fabrica de chocolate")
    console.log(`"Bom Filme!"`)
    else{
        console.log(`"!!!NÂO ENTENDI DIGITE NOVAMENTE!!!"`)
    }}
    filmeEscolhido(cinema)/*

    