import './pesquisa.css';

export default function Pesquisa() {
 return(
    <div className="topo-pesquisa">
        <div className="pesquisa">
            <input type="text" name="pesquisa" id="pesquisa" placeholder='Pesquisa'/>
            <button><img className='icone' src="../../assets/icones/search.png" alt=""/></button>
        </div>
        <div className="notificacao">
            <img className='icone' src="../../assets/icones/notificação(off).png" alt=""/>
        </div>
    </div>
);
}