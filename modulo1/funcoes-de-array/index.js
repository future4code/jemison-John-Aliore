//1.  Leia o código abaixo
    
    /* const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }
    ]
    
    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    }) */
    
    
   // a) O que vai ser impresso no console?

   //Resposta:aqui éssa funçao vai imprimir na minha tela um novo array
   //com todas as informações(o item, o index,e o array)

  // 2. Leia o código abaixo

  /* const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB) */

//a) O que vai ser impresso no console?

//Resposta: aqui o programa está me retornando um novo array apenas com o item
//ex(nome:"amanda Rangel").e ao mesmo tempo está imprimindo pra mim.

//3. Leia o código abaixo
    
   /*  const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })
    
    console.log(novoArrayC) */
   
    // a) O que vai ser impresso no console?

   // Resposta: ele vai imprimir o (o item(nome) o (apelido) dos dois primeiros nome que são diferente do ultimo)


  //(1) Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
    //realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
     ]

     //a) Crie um novo array que contenha apenas o nome dos doguinhos
      const novoArrayA = pets.map((item, index, array) =>{
          return item.raca
      })
console.log(novoArrayA)
     //b) Crie um novo array apenas com os [cachorros salsicha]

      const novoArrayB = pets.filter((item, index, array) =>{
           return item.raca ==="Salsicha"

      })
console.log(novoArrayB)
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const novoArrayC = pets.filter((item, index, array) =>{
    
    return item.raca ==="Poodle"})
    
    
    console.log(novoArrayC)
    
    
       