import logo from './logo.svg';
import HeaderC1 from'./components/header/header'
import styled from 'styled-components'
import Logo from './components/img/labenu.jfif'
import  MainP2 from './components/main/main'
import MainL2 from './components/mainL/MainL';
import Footer2 from './components/footer/footer';
import Card from './components/botões/botao';
import './App.css';

const MainContainer = styled.div`

`

function App() {
  return (
    
      <MainContainer>
          <HeaderC1
           FotoLogo={Logo}
          />
          <MainP2
          />
          <MainL2
          />
         <Footer2  
         
         endereco
         >
          </Footer2>

          <Card/>
          </MainContainer>

          
         
  )
}

export default App;
