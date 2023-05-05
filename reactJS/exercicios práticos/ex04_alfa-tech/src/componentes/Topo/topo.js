import './topo.css';
import {Link} from 'react-router-dom';

function Topo() {
    return (
        <section class="topo">
            <div class="menu limite">
                <div class="logo">
                    <img src="assets/logo-icone.png" alt="logo"/>
                    <div class="logo-txt">
                        <h3>AlfaTech</h3>
                        <p>Soluções em hospedagem</p>
                    </div>
                </div>
                <nav>
                    <Link to="/#informacoes">informações</Link>
                    <a href="/#planos">planos</a>
                    <Link to='/precos'>preços</Link>
                    <Link to="/#contato">contato</Link>
                </nav>
            </div>
        </section>
    );
}

export default Topo;