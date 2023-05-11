import Menu from "../../componentes/menu";
import Pesquisa from "../../componentes/pesquisa";
import InfosLateral from "../../componentes/infosLateral";

export default function Wallet() {
    return(
        <div className="conteudo">
            <Menu/>
            <div className="centro">
                <Pesquisa/>
                <h1>wallet</h1>
            </div>
            <InfosLateral/>
        </div>
    );
}