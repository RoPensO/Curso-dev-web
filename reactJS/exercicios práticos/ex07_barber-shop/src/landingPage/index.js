import React, {useState} from 'react';
import './estilo.css';

function LandingPage() {

  const light = 'tema-claro';
  const dark = 'tema-escuro';

  const [ temaAtualizado, setTemaAtualizado] = useState(false)

  const alterarTema = () => {
    setTemaAtualizado(!temaAtualizado)
  }

  return (
    <div className={temaAtualizado ? light : dark}>
      <div className="topo limite">
        <img src="barbearia-logo.png" alt="" />
        <button onClick={alterarTema}>
          <div className="btn">
            <img src={temaAtualizado ? 'moon.png' : 'sun.png'} alt="" />
            <p>{temaAtualizado ? 'Dark' : 'Light'}</p>
          </div>
        </button>
      </div>

      <div className="banner">
      </div>

      <div className="informacoes limite">
        <h1>Bem-vindo a Barber Shop</h1>

        <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
        <p> Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
        <p className='assinatura'>S. Kelly</p>
      </div>
    </div>
  );
}

export default LandingPage;
