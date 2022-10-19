import react,{useState} from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import {Container,Button} from './components/styled';
function App(props) {

  const {handlePoximaEtapa} = props;

  return (
    <Container>
     
     <Button onClick={handlePoximaEtapa}>Próxima etapa</Button>
  
    </Container>
  );
}

export default App;
