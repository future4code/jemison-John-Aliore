import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from'./components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import john  from "./components/img/john.jpg";
import casinha from'./components/img/casinha1.jfif';
import email from './components/img/email.jpg'
import labenu from './components/img/labenu.jfif'
import adr from'./components/img/ADR.jpg'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={john} 
          nome="JohnDev" 
          descricao="Olá sou aluno da Labenu, estou aprendendo a programar e estou com grandes espectativas nessa nova etapa da minha carreira"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
<div>
<CardPequeno
imagem={casinha}
nome='Valinhos-Sp'
/>
</div>
<div>
<CardPequeno
imagem={email}
nome='John.jwa123@gmail.com'
/>
</div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={labenu}
          nome="Labenu" 
          descricao="Se formando na escola de programação,e transitando de carreira" 
        />
        
        <CardGrande 
          imagem={adr}
          nome="ADR" 
          descricao="Encarrecado de Manutenção,funilaria e pintura em Autos e Caminhões á mais de 10 anos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
