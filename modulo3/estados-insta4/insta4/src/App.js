import React,{useState} from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {

  // estados 

  const [inputNome, setInputNome] = useState("")
  const [inputFotoPerfil, setInputFotoPerfil] = useState("")
  const [inputPublicacao, setInputPublicacao] = useState("")
 
  const [postsInsta, setPostInsta] = useState ([
  {nomeUsuario:"paulinha",fotoUsuario:"https://picsum.photos/50/49",fotoPost:"https://picsum.photos/200/149"},
  {nomeUsuario:"Otuada" , fotoUsuario:"https://picsum.photos/50/48" ,fotoPost:"https://picsum.photos/200/148"},
  {nomeUsuario:"Tonho09", fotoUsuario:"https://picsum.photos/50/47", fotoPost:"https://picsum.photos/200/147"}
  
])


const listaDePessoas = postsInsta.map((item, index) => {
  return(
  
  <Post key={index} 
    nomeUsuario={item.nomeUsuario}
    fotoUsuario={item.fotoUsuario}
    fotoPost={item.fotoPost} 
   
  
    
    />
  
  
  )
  })

//
const handleInputNome = (e) => {
  setInputNome(e.target.value)
}
//
const handleinputFotoPerfil = (e) => {
  setInputFotoPerfil(e.target.value)
}
//
const handleinputPublicacao = (e) => {
  setInputPublicacao(e.target.value)
}





// adicionar item
const addPost = (e) => {
 e.preventDefault()

 setPostInsta([...postsInsta,{nomeUsuario:inputNome, fotoUsuario:inputFotoPerfil,fotoPost:inputPublicacao}])
 setInputNome("")
 setInputFotoPerfil("")
 setInputPublicacao("")

}


//

  return (

    <MainContainer>
      <div>

      
      <label>Nome Usuario:</label>
      <input
        placeholder='Insira seu nome !'
        value={inputNome}
        onChange={handleInputNome}
      />
      
      <label>Foto Perfil:</label>
      <input
        placeholder='Insira seu nome !'
        value={inputFotoPerfil}
        onChange={handleinputFotoPerfil}
      />

      <label> Foto Publicação :</label>
      <input
        placeholder='Insira seu nome !'
        value={inputPublicacao}
        onChange={handleinputPublicacao}
      />
      
      <button onClick={addPost}>Adicionar</button>
      

      </div>
      {listaDePessoas}
      
        <h1>PARA ADICIONAR FOTO DE PERFIL COPIE O LINK:
          https://picsum.photos/50/48</h1>
        <h1>PARA ADICIONAR FOTO DO REELS COPIE O LINK:
          "https://picsum.photos/200/149"</h1>
      
    </MainContainer>
      
   

)
}

  
export default App;