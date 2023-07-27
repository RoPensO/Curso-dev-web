import './style.css';

import fotoBanner from '../../assets/banner.png'

function SessaoBanner() {
  return (
    <div className='banner'>
      <div className="fotoBanner fotoBanner-escuro">
        <img src={fotoBanner} alt="" />
      </div>

      <div className="textoBanner">
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </div>
  );
}

export default SessaoBanner;
