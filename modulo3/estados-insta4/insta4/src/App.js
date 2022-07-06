import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {
  const arrayDePost = [
    {nomeUsuario:'paulinha',fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'},
    {nomeUsuario:'Otuada',fotoUsuario:'https://picsum.photos/30/50',fotoPost:'https://picsum.photos/115/150'},
    {nomeUsuario:'Tonhão09',fotoUsuario:'https://picsum.photos/25/50',fotoPost:'https://picsum.photos/250/150'},

  ]
  const mapPost = arrayDePost.map((item, index) => {

    return(
      <Post key={index}
      nomeUsuario={item.nomeUsuario}
      fotoUsuario={item.fotoUsuario}
      fotoPost={item.fotoPost}
      />
  )
    })

    return(
    
  <MainContainer>
            {mapPost}

        </MainContainer>

    )
}


export default App;
