/* - **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
        
        ```jsx
        let valor = 0
        for(let i = 0; i < 5; i++) {
          valor += i
        }
        console.log(valor)
        ```
        (1)RESPOSTA: aqui o valor vai ser 10, aqui o programa esta retornando o valor dele mesmo mais o valor que ele se transforma

    2. Leia o código abaixo:
        
        ```jsx
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
          if (numero > 18) {
        		console.log(numero)
        	}
        }
        ```
        
        a) O que vai ser impresso no console?
        
        b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
        
    (2)RESPOSTA:(A): aqui ele vai me imprimir para mim no console todos os numeros maiores que 18
     (B):sim daria é que nesse caso eu quero o maior se eu quisesse cada eu mudava o codigo e se eu quisesse todos eu pedia todos >0
     
    3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? */

 /*    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
} */
// (3)RESPOSTA: vai imprimir 4 asteriscos e aparecer o numero 4


//exercicios de escrita de código.




/* 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
 */   
let zero = 0 
let qtdDePet = Number(prompt(`Olá quantos Pet's você tem?`))
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
if(qtdDePet<=zero){
    alert(`Que pena,adote um!!!`)

console.log (`${qtdDePet}`<= zero ,`Que pena,adote um`)}

    //b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, 
    //um por um, e guarde esses nomes em um array
     else if(qtdDePet>0){alert`Digite o(s) nome(s) do(s)Pet(s)`
}
        let numeroDePet = qtdDePet+zero
         
      

    
    
    //c) Por fim, imprima o array com os nomes dos bichinhos no console */

































