import React from 'react'
import Card from './Card';

function PagInicial  (props) {
  return(
    <div className='containerCard'>
      <div className='header'>
        <h1>AstroMatch</h1>
      </div>
      <div className='botaoTrocaPag'>
        <button onClick={() => props.trocaPagina('matchs')}>Ir para os Matchs</button>
      </div>
    <Card/>
</div>
  )
}
 



export default PagInicial;