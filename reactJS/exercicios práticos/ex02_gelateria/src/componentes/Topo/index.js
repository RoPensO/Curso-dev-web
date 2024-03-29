import { Link } from 'react-router-dom';

import './topo.css'

function Topo() {
    return (
        <header>
            <div className='limite'>
                <img src="./assets/logo.png" alt="Logo"/>
                <nav>
                    <Link className='link-topo' to='/'>Home</Link>
                    <Link className="link-topo" to='/sabores'>Sabores</Link>
                    <Link className="link-topo" to='/sobre'>Sobre</Link>
                </nav>
            </div>
        </header>
    );
}

export default Topo;