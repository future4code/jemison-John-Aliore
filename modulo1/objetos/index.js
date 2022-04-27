/* - **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1.  Leia o código abaixo */
        
        /* ```jsx */
        /* const filme = {
        	nome: "Auto da Compadecida", 
        	ano: 2000, 
        	elenco: [
        		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        		"Virginia Cavendish"
        		], 
        	transmissoesHoje: [
        		{canal: "Telecine", horario: "21h"}, 
        		{canal: "Canal Brasil", horario: "19h"}, 
        		{canal: "Globo", horario: "14h"}
        		]
        } */
        
        /* console.log(filme.elenco[0])
        console.log(filme.elenco[filme.elenco.length -1])
        console.log(filme.transmissoesHoje[2]) */
        /* ```
        
       /*  a) O que vai ser impresso no console?
        Resposta:Matheus Nachtergaele
        Matheus Cavendish
        Canal Globo,horario: 14h */ 
    
    /* 2. /* Leia o código abaixo */
        
         /* ```jsx  */ 
         /* const cachorro = {
        	nome: "Juca", 
        	idade: 3, 
        	raca: "SRD"
        }
        
        const gato = {...cachorro, nome: "Juba"}
        
        const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
        
        console.log(cachorro)
        console.log(gato)
        console.log(tartaruga)   */
        /* ``` */
        
        /* a) O que vai ser impresso no console?
        Resposta:
        nome: 'Juca', idade: 3, raca: 'SRD' 
 nome: 'Juba', idade: 3, raca: 'SRD' 
 nome: 'Jubo', idade: 3, raca: 'SRD'
        
        b) O que faz a sintaxe dos três pontos antes do nome de um objeto? */ 
        /*Resposta:faz espalahamento de objeto/*
    /* 3. Leia o código abaixo
        
        /* ```jsx */
         /* function minhaFuncao(objeto, propriedade) {
        	return objeto[propriedade]
        }
        
        const pessoa = {
          nome: "Caio", 
          idade: 23, 
          backender: false
        }
        
        console.log(minhaFuncao(pessoa, "backender"))
        console.log(minhaFuncao(pessoa, "altura")) */
        /* ``` */
        /* 
        a) O que vai ser impresso no console?
        false
        undefined
        b) Explique o valor impresso no console. Você sabe por que isso aconteceu? */ 
        //Sim quando dentro do meu objeto tenho uma propriedade chamada backender onde atribui o boleano false
        //entao quando buscado essa propriedade o console vai me retornar um false
        //ja em baixo da undefined pq altura nao foi atribuido nenhum valor nao foi nem adicionado.

    /*Questao (1) escrita de código*/
   /*  function minhaFuncaonome(nomes, apelidos) {
        return nomes[apelidos]
    }

    const nomes = {
        nome: "johnBilom",
        apelidos:["Bila","BilomBombom","BilaBilu",],
    }
    console.log("Eu sou ", nomes.nome,"mas pode me chamar de:", nomes.apelidos)
    //Letra (B)
    const maisApelidos = {...nomes,
    apelidos:["bilaboy","Bilubilu","BilomMarrom"]
    }
    console.log(maisApelidos.apelidos) */
//Questao (2)

/* const fichaProfissional = {
    nome:"Carlos",             
    idade:"51",
    profissao:"Mecânico",
}
const adicionarProfissional1={...fichaProfissional,
    nome:"John",
    idade:"26",
    profissao:"Pintor",
}
    console.log(fichaProfissional.nome,fichaProfissional.nome.length,fichaProfissional.idade,
        fichaProfissional.profissao,fichaProfissional.profissao.length) */
//Questao (3)


 const mercado = carrinho = Array =[]
const frutasVermelhas = {
     nome:("morango","melancia","amora"),
     morango:true,
     melancia:true,
     amora:true,}
const frutasAmarelas = {...frutasVermelhas,
    nome:("melao","banana","abacaxi"),
    melao:true,
    banana:true,
    abacaxi:true,}
const frutasVerdes = {...frutasAmarelas,...frutasVermelhas,
    nome:("kiwi","limao","abacate"),
    kiwi:true,
    limao:true,
    abacate:true,}
function colocandoNoCarrinho({
    return carrinho
}
console.log(carrinho,)



    
    