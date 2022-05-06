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
//let zero = 0 
//let qtdDePet = Number(prompt(`Olá quantos Pet's você tem?`))
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//if(qtdDePet<=zero){
   // alert(`Que pena,adote um!!!`)

//console.log (`${qtdDePet}`<= zero ,`Que pena,adote um`)}

    //b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, 
    //um por um, e guarde esses nomes em um array
    //c) Por fim, imprima o array com os nomes dos bichinhos no console */ 
   /* else if(qtdDePet>zero){alert`Digite o(s) nome(s) do(s)Pet(s)`
}
        while(zero<qtdDePet){
            let nomeDosBichos = Array(prompt("Digite o nome do pet"));
            console.log(nomeDosBichos)
            zero++
        }*/


       // 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
       //Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    /* let arrayOriginal = [10,23,33,40,50] */

       // a) Escreva um programa que **imprime** cada um dos valores do array original.
        /* for(let elemento of arrayOriginal){
            console.log(elemento)
        } */
       //b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
        
      /* for(let elemento of arrayOriginal){
          console.log(elemento/10)
      }  */
        // c) Escreva um programa que **crie** um novo array contendo, somente,
       // os números pares do array original e **imprima** esse novo array
        
       //for(let elemento of arrayOriginal.splice(1,2)){
       //    console.log(arrayOriginal)
       //}
       //d) Escreva um programa que **crie** um novo array contendo strings,
        // da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
     /*    for(let elemento of arrayOriginal){

            console.log(`O elemento do índex 0 é ${arrayOriginal[0]}`)
            console.log(`O elemento do índex 1 é ${arrayOriginal[1]}`)
            console.log(`O elemento do índex 2 é ${arrayOriginal[2]}`)
            console.log(`O elemento do índex 3 é ${arrayOriginal[3]}`)
            console.log(`O elemento do índex 4 é ${arrayOriginal[4]}`)


        } */
        //e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

        
        /* let arrayOriginal = [10,23,33,40,50]

        function imprimirMaior(array){
            let maior = 0
            let elemento = 0
            for(let i = 0; i < array.length ; i++){
            elemento = array[i]
            if (elemento > maior){
                maior = elemento
            }    
        }
        return maior   
}
function imprimirMenor(array){

let menor = 10
for(let elemento of array){
    if (elemento<menor){
        menor = elemento
    }
}
return menor
}
console.log(imprimirMenor(arrayOriginal))
console.log(imprimirMaior(arrayOriginal))
console.log(`O maior número é ${imprimirMaior(arrayOriginal)} e o menor é ${imprimirMenor(arrayOriginal)}`) */
        



























