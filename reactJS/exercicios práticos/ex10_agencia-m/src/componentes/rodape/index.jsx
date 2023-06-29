import './Rodape.css';

import Logo from '../../assets/logo.png'
import FacebookIcon from '../../assets/facebook.png'
import TwitterIcon from '../../assets/twitter.png'
import LinkedinIcon from '../../assets/linkedin.png'
import DribbleIcon from '../../assets/dribble.png'
import BehanceIcon from '../../assets/behance.png'
import GooglePlusIcon from '../../assets/google-plus.png'

function Rodape() {
  return (
    <footer>
      <div className="rodape dark-rodape">
        <img src={Logo} alt="" />
        <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
        <div className="social">
          <img src={FacebookIcon} alt="" />
          <img src={TwitterIcon} alt="" />
          <img src={LinkedinIcon} alt="" />
          <img src={DribbleIcon} alt="" />
          <img src={BehanceIcon} alt="" />
          <img src={GooglePlusIcon} alt="" />
          
        </div>
        <div className="assinatura">
          <p>Copyright 2023 @<span>RoPensO</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
