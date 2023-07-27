import './style.css';

import Logo from '../../assets/logo.png'

import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import LinkedIn from '../../assets/linkedin.png'
import Dribble from '../../assets/dribble.png'
import Behance from '../../assets/behance.png'


function Rodape() {
  return (
    <footer className='rodape-escuro'>
      <img src={Logo} alt="" />
      <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.</p>
      <div className="social">
        <a href="#"><img src={Facebook} alt="" /></a>
        <a href="#"><img src={Twitter} alt="" /></a>
        <a href="#"><img src={Dribble} alt="" /></a>
        <a href="#"><img src={LinkedIn} alt="" /></a>
        <a href="#"><img src={Behance} alt="" /></a>

      </div>
      <div className="assinatura">
        <p>Copyright 2023 &copy; <span>RoPensO</span></p>
      </div>
    </footer>
  );
}

export default Rodape;
