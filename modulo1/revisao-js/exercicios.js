// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 return array.sort((a,b)=>{
   if(a>b) return 1;
   if(a<b) return -1;
   return 0;
 })

  
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(arrays => {
 return((arrays %2 === 0))
  })

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let par =array.filter(arrays =>{ 
    return((arrays %2 === 0))
   })
   let aoQuadrado = par.map(par =>{
     return Math.pow(par,2)
   })
   return aoQuadrado
   
    
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let i = 0
    let maior = -Infinity
    while(i<array.length){
      if(array[i] > maior){
        maior = array[i]
      }
      i++
    }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  function maiorOuMenor(){
    if(num1>=num2){
      return num1
    }
    else 
      return num2
    }
function divisor(){
  if(num2 % num1 === 0){
    divisivel = true
  } else {
    divisivel = false
  }
  return divisivel
  
}
  function diferencaEntreNumeros(){
    let resultado
    if(num1 > num2){
      resultado = num1 - num2
    } else {
      resultado = num2 - num1
    }
    return resultado
  }
  let objeto = {
    maiorNumero: maiorOuMenor(),
    maiorDivisivelPorMenor:divisor(),
    diferenca:diferencaEntreNumeros()
  }
  return objeto
  }

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i +=2) {
        numerosPares.push(i);
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if( (ladoA == ladoB) && (ladoB == ladoC)) {
  return "Equilátero";
}
else if((ladoA!=ladoB) && (ladoB!=ladoC) && (ladoA!=ladoC)){
  return "Escaleno"
}
else{
  return "Isósceles"
}


}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arraySmaiorSmenor = []
  array.sort((a,b) => a-b)
  arraySmaiorSmenor.push(array[array.length - 2])
  arraySmaiorSmenor.push(array[1])
  
  return arraySmaiorSmenor 

}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(`, `)}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let pessoaAnonima = {...pessoa,
    nome:"ANÔNIMO"
   
}
return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  return  pessoas.filter((item,array) => {
return (item.idade > 14 && item.idade < 60 && item.altura > 1.5)
   })

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return  pessoas.filter((item,array) => {
    return !(item.idade > 14 && item.idade < 60 && item.altura > 1.5)
       })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for(let i = 0; i < contas.length; i ++){
    let entradas = [];
    calcularSaldo(contas);
    function calcularSaldo(utilizador){
      utilizador[i].compras.forEach(nr => entradas.push(nr * -1));
      
  }
  function somaNumeros(numeros){
    return numeros.reduce((sum, nr)=> sum +nr, 0);
  }
contas[i].compras =[]
contas[i].saldoTotal += somaNumeros(entradas)  
}
  return contas
  }


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function(a, b) {
    if(a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  });
   return consultas
}



// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  return consultas.sort((a,b)=>{
    let dataCom1 = a.dataDaConsulta.split("/")
    let dataCom2 = b.dataDaConsulta.split("/")
    
    let novaData1 = new Date([dataCom1[2]],[dataCom1[1]] ,[dataCom1[0]])
    let novaData2 = new Date(dataCom2[2],dataCom2[1],dataCom2[0])
    
    if(novaData1>novaData2) return 1;
    if(novaData1<novaData2) return -1;
    return 0;
  })

}

    

