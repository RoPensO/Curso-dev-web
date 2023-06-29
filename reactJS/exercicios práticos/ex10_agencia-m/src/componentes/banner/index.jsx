import './Banner.css';

import HomemBanner from '../../assets/banner.png'

function Banner() {
  return (
    <div className="banner">
      <div className="imagem dark-imagem">
        <img src={HomemBanner} alt="" />
      </div>
      <div className="titulo">
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </div>
  );
}

export default Banner;
