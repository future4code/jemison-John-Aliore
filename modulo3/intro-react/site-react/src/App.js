import logoLabenu from './img/logo.png'
import fotoJohn from './img/john.jpg'
import './App.css';

function App() {
  const titulo ='Olá! Eu sou a Labenu!'
  const falarBoaNoite =()=>{
    (alert`Boa Noite`)
  }
  return (
    <div className="App">
       
      <h1>{titulo}</h1>
      <header className="App-header">
        <img src ={logoLabenu} className="logo-labenu" alt="logo" />
       <h2> Este é o meu primeiro site React</h2>
        
       <button onClick={falarBoaNoite}>Aperte este botão</button>
      <img src ={fotoJohn} className="fotojohn" alt="fotojohn" />
         
        
        
      </header>
      
    </div>
  );
}

export default App;
