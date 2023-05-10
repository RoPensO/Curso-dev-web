import './pesquisa.css';

export default function Pesquisa() {
 return(
    <div className="topo-pesquisa">
        <div className="pesquisa">
            <input type="text" name="pesquisa" id="pesquisa" placeholder='Pesquisa'/>
            <button><img src="../../assets/icones/search.png" alt=""/></button>
        </div>
        <div className="notificacao">
            <img src="../../assets/icones/notificação(off).png" alt=""/>
        </div>
    </div>
);
}