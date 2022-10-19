import React, { useState } from 'react'
import PagDeMatch from './components/PagDeMatch';
import PagInicial from './components/PagInicial';


const Principal =(props) =>{

  const [Pag,setPag] = useState('inicial')

  const trocaPagina = (Pag) =>{
    setPag(Pag)
  }


const renderizarPag = () =>{
  switch (Pag) {
    case 'inicial':
      return <PagInicial trocaPagina={trocaPagina}/>
      case 'matchs':
      return <PagDeMatch trocaPagina={trocaPagina}/>
    default:
      return null;
  }
}
return (
  <div>
    {renderizarPag()}
  </div>
);
}


export default Principal;
