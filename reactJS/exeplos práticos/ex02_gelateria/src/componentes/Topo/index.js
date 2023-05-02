import { Link } from 'react-router-dom';

import './topo.css'

function Topo() {
    return (
        <header>
            <div>
                <img src="./assets/logo.png" alt="Logo"/>
                
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/sabores'>Sabores</Link>
                    <Link to='/sobre'>Sobre</Link>
                </nav>
            </div>
        </header>
    );
}

export default Topo;