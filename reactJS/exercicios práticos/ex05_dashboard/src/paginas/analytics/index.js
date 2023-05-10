import Menu from "../../componentes/menu";
import Pesquisa from "../../componentes/pesquisa";
import InfosLateral from "../../componentes/infosLateral";

export default function Analytics() {
    return(
        <div className="conteudo">
            <Menu/>
            <div>
                <Pesquisa/>
                <h1>Analytics</h1>
            </div>
            <InfosLateral/>
        </div>
    );
}