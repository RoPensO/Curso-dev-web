import './Topo.css';

import Logo from '../../assets/logo.png'
import darkIcon from '../../assets/moon.png'
import lightIcon from '../../assets/sun.png'

function Topo() {
  return (
    <header>
        <div className="topo topo-dark">
            <img src={Logo} alt="" />
            <button className="dark-icon">
                <img src={lightIcon} alt="" />
            </button>
        </div>
    </header>
  );
}

export default Topo;
