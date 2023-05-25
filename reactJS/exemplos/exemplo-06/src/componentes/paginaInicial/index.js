import './estilo.css';
import { useState } from "react";

export default function PaginaInicial() {

  // ** if comum e sem condição booleana **
  // const [ novaCor, setNovaCor ] = useState('bg-vermelho');
  // const alterarCor = () => {
  //   if (novaCor === 'bg-vermelho') {
  //       setNovaCor('bg-azul')
  //   } else {
  //       setNovaCor('bg-vermelho')
  //   }
  // }
  

  // ** if ternário e booleano **
  const fundoVermelho = 'bg-vermelho';
  const fundoAzul = 'bg-azul';

  const [ corAtualizada, setCorAtualizada] = useState(false)

  const alterarCor = () => {
    setCorAtualizada(!corAtualizada)
  }
  
  return (
    <div className='display'>
      <div className='container'>
        <h2>Alterando estilo do elemento</h2>
        <div className={ corAtualizada ? fundoAzul : fundoVermelho }></div>
        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <button onClick={ alterarCor }>Alterar</button>
      </div>
    </div>
  );
}