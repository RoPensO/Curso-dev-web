import './style.css'

import Logo from '../../assets/logo.png'
import Moon from '../../assets/moon.png'
import Sun from '../../assets/sun.png'


function Topo(props) {

  

  return (
    <header className={ehTemaEscuro ? 'bannerEscuro' : 'bannerClaro'}>
      <img className='logo' src={Logo} alt="Logo" />
      <button onClick={props.alterarTema} className={props.ehTemaEscuro ? 'btn-modo-escuro' : 'btn-modo-claro'}>
        <img className='iconesBtn' src={props.ehTemaEscuro ? iconeSol : iconeLua} alt='icone'/>
      </button>
    </header>
  );
}

export default Topo;
